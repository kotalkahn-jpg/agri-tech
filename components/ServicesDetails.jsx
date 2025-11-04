import React, { useEffect, useRef, useState } from "react";
import { getServices } from "../lib/services";
import ServiceCard from "./ServiceCard";

export default function ServicesDetails() {
  const [services, setServices] = useState([]);
  const containerRef = useRef(null);

  // Fetch services
  useEffect(() => {
    getServices().then((data) => setServices(data));
  }, []);

  // Intersection Observer for header only
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const header = el.querySelector(".fade-up-header");
    if (!header) return;

    // Initial state
    header.style.opacity = 0;
    header.style.transform = "translateY(30px)";
    header.style.transition = "opacity 700ms ease, transform 700ms ease";

    // Responsive settings
    const isMobile = window.innerWidth < 768;
    const threshold = isMobile ? 0.1 : 0.15;
    const rootMargin = isMobile ? "0px 0px -40px 0px" : "0px 0px -80px 0px";

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    obs.observe(header);

    return () => obs.disconnect();
  }, [services]);

  return (
    <div
      ref={containerRef}
      style={{
        padding: "60px 6%",
        backgroundColor: "#fff",
      }}
    >
      {/* Header still fades */}
      <h1
        className="fade-up-header"
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "#228B22",
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        Our Services
      </h1>

      {/* Cards container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              flex: "1 1 calc(33.333% - 16px)", // 3 per row on large
              maxWidth: "400px", // optional max width per card
              minWidth: "250px", // ensures 1 per row on mobile
            }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}
