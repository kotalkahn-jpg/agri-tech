"use client";
import React, { useEffect, useRef, useState } from "react";

export default function TestMessage() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={isVisible ? "fade-up" : "hidden"}
      style={{
        width: "100%",
        minHeight: "400px",
        backgroundColor: "#ffffffff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        gap: "50px",
        flexWrap: "wrap",
        opacity: 0,
        transform: "translateY(50px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      
      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/tech2.jpg"
          alt="YouthWise Logo"
          style={{ width: "500px", height: "auto", borderRadius: "12px" }}
        />
      </div>

      
      <div
        style={{
          flex: "2 1 400px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "10px",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#333",
      margin: 0,
    }}
  >
    Who We Are
  </h2>
  <img
    src="/images/green-leaf.png"
    alt="Leaf icon"
    style={{
      width: "40px",
      height: "40px",
      objectFit: "contain",
      color: "green",
      animation: "float 3s ease-in-out infinite",
    }}
  />
</div>

        <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "100%" }}>
          Here at The Anchorage group, we believe in empowering agricultural communities through
          technology and innovation. We bring together local expertise and global thinking to build
          sustainable solutions for the future.
        </p>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  }}
>
  {[
    "Innovation-driven solutions",
    "Community-focused approach",
    "Sustainability & impact",
    "Reliable support & guidance",
  ].map((item, idx) => (
    <div
      key={idx}
      style={{
        backgroundColor: "#fff",
        padding: "16px 20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontWeight: "500",
        color: "#228B22",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
        e.currentTarget.style.background = "#e9ffe9";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        e.currentTarget.style.background = "#fff";
      }}
      onTouchStart={(e) => {
        e.currentTarget.style.transform = "scale(0.98)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
      }}
      onTouchEnd={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";
      }}
    >
      {item}
    </div>
  ))}
</div>

      </div>

      
      <style jsx>{`
        .fade-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
