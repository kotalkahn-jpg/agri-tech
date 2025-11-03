import React, { useRef } from "react";
import AnimatedLottie from "../hooks/AnimatedLottie";
import WhyChooseUs from "../components/WhyChooseUs";
import OurPartners from "../components/OurPartners";
import ServiceDescription from "../components/ServiceDescription";
import useScrollFade from "../hooks/useScrollFade";

export function ServiceDetail({ service }) {
  const heroFade = useScrollFade(); // hero section fade
  const descriptionRef = useRef(null);

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;

  const scrollToDescription = () => {
    if (descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      
      <section
        ref={heroFade.ref}
        style={{
          ...heroFade.style, 
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "40px 10%",
          backgroundImage: `url(${service.topSectionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.55)",
            zIndex: 1,
          }}
        ></div>

       
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: "800",
              marginBottom: "20px",
              textShadow: "0 4px 10px rgba(0,0,0,0.5)",
              color: service.headingColor || "#32CD32",
            }}
          >
            {service.name}
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              marginBottom: "25px",
              textShadow: "0 3px 8px rgba(0,0,0,0.5)",
            }}
          >
            {service.topSectionDescription}
          </p>

          
          <button
            onClick={scrollToDescription}
            style={{
              padding: "14px 30px",
              backgroundColor: "#228B22",
              border: "none",
              borderRadius: "30px",
              color: "white",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              animation: "bounce 2s infinite",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#32CD32")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#228B22")
            }
          >
            ↓ Scroll to details
          </button>

          </div>

        
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "180px",
            height: "180px",
            zIndex: 1,
            opacity: 0.8,
          }}
        >
          <AnimatedLottie />
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <WhyChooseUs service={service} />
      <OurPartners service={service} />

      {/* Target section for scroll */}
      <div ref={descriptionRef}>
        <ServiceDescription service={service} />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </div>
  );
}
