import React from "react";
import useScrollFade from "../hooks/useScrollFade";

export default function OurPartners({ service }) {
  // fallback ensures section is visible even if hook returns undefined initially
  const fadeStyle = useScrollFade() || { opacity: 1, transform: "translateY(0)" };

  if (!service || !service.partners || service.partners.length === 0) {
    return <p style={{ textAlign: "center" }}>No partners to display.</p>;
  }

  return (
    <section
      className="our-partners-section fade-in-section"
      style={{
        ...fadeStyle,
        padding: "80px 5% 100px 5%",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "800",
          color: "#1A531B",
          marginBottom: "50px",
          letterSpacing: "1px",
        }}
      >
        Our Trusted Partners
      </h2>

      {/* Logos */}
      <div className="logos-wrapper">
        <div className="logos-inner">
          {service.partners.map((logo, index) => (
            <div key={index} className="logo-item">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                style={{
                  width: "140px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.8,
                  transition:
                    "filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1.05) rotate(5deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.8";
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background lines */}
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>

      {/* Bottom spikes */}
      <div className="bottom-spikes"></div>

      <style>
        {`
          /* Logos movement */
          .logos-wrapper {
            overflow: hidden;
            position: relative;
            width: 100%;
          }
          .logos-inner {
            display: flex;
            gap: 40px; /* control space between logos */
            animation: moveLogos 60s linear infinite;
          }
          .logo-item img {
            display: block;
          }
          @keyframes moveLogos {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }

          /* Background lines */
          .our-partners-section > .line {
            position: absolute;
            width: 300%;
            height: 8px;
            background: rgba(34,139,34,0.08);
            left: -50%;
            transform: rotate(45deg);
            animation: moveLine 30s linear infinite;
            z-index: 0;
          }
          .line1 { top: 10%; animation-delay: 0s; }
          .line2 { top: 40%; animation-delay: 10s; }
          .line3 { top: 70%; animation-delay: 20s; }
          @keyframes moveLine {
            0% { transform: translateX(0) rotate(45deg); }
            50% { transform: translateX(50%) rotate(45deg); }
            100% { transform: translateX(0) rotate(45deg); }
          }

          /* Bottom green spikes */
          .bottom-spikes {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 25px;
            background: #228B22;
            clip-path: polygon(
              0% 100%, 2% 20%, 4% 100%, 6% 20%, 8% 100%, 10% 20%, 
              12% 100%, 14% 20%, 16% 100%, 18% 20%, 20% 100%, 22% 20%, 
              24% 100%, 26% 20%, 28% 100%, 30% 20%, 32% 100%, 34% 20%, 
              36% 100%, 38% 20%, 40% 100%, 42% 20%, 44% 100%, 46% 20%, 
              48% 100%, 50% 20%, 52% 100%, 54% 20%, 56% 100%, 58% 20%, 
              60% 100%, 62% 20%, 64% 100%, 66% 20%, 68% 100%, 70% 20%, 
              72% 100%, 74% 20%, 76% 100%, 78% 20%, 80% 100%, 82% 20%, 
              84% 100%, 86% 20%, 88% 100%, 90% 20%, 92% 100%, 94% 20%, 
              96% 100%, 98% 20%, 100% 100%
            );
            z-index: 2;
          }

          @media (max-width: 768px) {
            .our-partners-section h2 { font-size: 2rem; }
            .our-partners-section img { width: 100px; }
            .bottom-spikes { height: 15px; }
          }
        `}
      </style>
    </section>
  );
}
