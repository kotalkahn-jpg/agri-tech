import React, { useState, useEffect, useRef } from "react";
import "../WhyChooseUs.css";

export default function WhyChooseUs({ service }) {
  const defaultText =
    "We build sustainable digital solutions with a focus on reliability, performance, and environmental consciousness. Our approach combines innovation and responsibility to help your business grow ethically and efficiently.";

  const fullText = service?.whyChooseUsText ?? defaultText;
  const images =
    service?.whyChooseUsImages ?? [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523475496153-3d6cc2c8c9d6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    ];

  const [displayedText, setDisplayedText] = useState("");
  const [overlay, setOverlay] = useState({ visible: false, src: "", text: "" });
  const [closing, setClosing] = useState(false);
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  
  useEffect(() => {
    setDisplayedText("");
    if (!fullText) return;
    let index = 0;
    const speed = 25;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [fullText]);

  
  useEffect(() => {
    const handlers = [];
    imageRefs.current.forEach((card) => {
      if (!card) return;
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX ?? (e.touches?.[0]?.clientX)) - rect.left;
        const y = (e.clientY ?? (e.touches?.[0]?.clientY)) - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * 6;
        const rotateY = ((cx - x) / cx) * 6;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
      };
      const onLeave = () => {
        card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("touchmove", onMove, { passive: true });
      card.addEventListener("touchend", onLeave);
      handlers.push({ card, onMove, onLeave });
    });
    return () => {
      handlers.forEach(({ card, onMove, onLeave }) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("touchmove", onMove);
        card.removeEventListener("touchend", onLeave);
      });
    };
  }, [images]);

  
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const nodes = el.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  
  const openOverlay = (src, text) => {
    setOverlay({ visible: true, src, text });
    setClosing(false);
  };

  
  const closeOverlay = () => {
    setClosing(true);
    setTimeout(() => setOverlay({ visible: false, src: "", text: "" }), 250);
  };

  return (
    <section ref={sectionRef} className="wcus-section">
      <div className="visual reveal">
        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            className="img-card"
            onClick={() => openOverlay(src, fullText)}
          >
            <img src={src} alt={`Why choose us ${i + 1}`} />
          </div>
        ))}
        <div className="hint">Hover over an image to interact, click to expand</div>
      </div>

      <div className="content">
  <div className="eyebrow">Why choose us</div>

  
  <h2 className="reveal white-text">Eco-smart solutions. Real-world impact.</h2>

  <p className="lead reveal">
    {displayedText}
    <span className="cursor">|</span>
  </p>

  
  <div className="benefits reveal white-text">
    {[
      "Proven Delivery",
      "Secure & Reliable",
      "Customer Focus",
      "Scalable Architecture",
    ].map((title, idx) => (
      <div key={idx} className="benefit">
        <div className="icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <circle cx="12" cy="12" r="9" />
          </svg>
        </div>
        <div>
          <h4>{title}</h4>
          <p>Sample benefit description for {title}.</p>
        </div>
      </div>
    ))}
  </div>

  
  <div className="cta-row reveal">
    <button
      className="btn btn-primary"
      onClick={() => (window.location.href = "/contact")}
    >
      Get a free consultation
    </button>

    <button
      className="btn btn-ghost"
      onClick={() => {
        const section = document.querySelector("#overview");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
    >
      See case studies
    </button>
  </div>
</div>


      
      {overlay.visible && (
        <div
          className={`image-overlay ${closing ? "hide" : "show"}`}
          onClick={closeOverlay}
        >
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeOverlay}>
              &times;
            </button>
            <img src={overlay.src} alt="Expanded view" />
            <div className="overlay-text">{overlay.text}</div>
          </div>
        </div>
      )}
    </section>
  );
}
