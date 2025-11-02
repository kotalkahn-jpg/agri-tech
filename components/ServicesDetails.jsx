
import React, { useEffect, useRef, useState } from "react";
import { getServices } from "../lib/services";
import ServiceCard from "./ServiceCard";

export default function ServicesDetails() {
  const [services, setServices] = useState([]);
  const containerRef = useRef(null);

  
  useEffect(() => {
    getServices().then((data) => setServices(data));
  }, []);

  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const children = el.querySelectorAll(".fade-up");
    children.forEach((child) => {
      child.style.opacity = 0;
      child.style.transform = "translateY(30px)";
      child.style.transition = "opacity 700ms ease, transform 700ms ease";
    });

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
      { threshold: 0.15 }
    );

    children.forEach((child) => obs.observe(child));
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
      <h1
        className="fade-up"
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

      <div
        className="fade-up"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
