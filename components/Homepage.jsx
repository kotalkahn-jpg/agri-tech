// src/pages/Homepage.jsx
import React from "react";
import HeaderSection from "../components/HeaderSection";
import ServicesDetails from "../components/ServicesDetails";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function Homepage() {
  const introAnim = useScrollFadeIn();
  const servicesAnim = useScrollFadeIn();

  return (
    <div
      style={{
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <HeaderSection />
 
      <section
        id="intro"
        ref={introAnim.ref}
        style={{
          padding: "48px 6%",
          textAlign: "center",
          background: "linear-gradient(180deg, #fff, #fbfffb)",
          opacity: introAnim.isVisible ? 1 : 0,
          transform: introAnim.isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <h2
          style={{
            color: "#228B22",
            fontSize: "1.9rem",
            marginBottom: 12,
          }}
        >
          Welcome to Our Agricultural Solutions
        </h2>
        <p
          style={{
            maxWidth: 900,
            margin: "0 auto",
            color: "#444",
            lineHeight: 1.6,
          }}
        >
          We deliver practical agri-tech solutions — precision farming, drone
          monitoring, smart irrigation and more. Explore our services below to
          see how we help farmers increase yields, reduce waste and adopt
          sustainable practices.
        </p>
      </section>

      
      <div
        id="services"
        ref={servicesAnim.ref}
        style={{
          background: "#fff",
          opacity: servicesAnim.isVisible ? 1 : 0,
          transform: servicesAnim.isVisible
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        <ServicesDetails />
      </div>
    </div>
  );
}
