import React, { useEffect, useState } from "react";
import { getServices } from "../lib/services";
import AnimatedLottie from "../hooks/AnimatedLottie"; 
import WhyChooseUs from "../components/WhyChooseUs"; 
import OurPartners from "../components/OurPartners";
import ServiceDescription from "../components/ServiceDescription";

export function ServiceDetail({service}) {

 

  if (!service) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div>
      
      <section
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 10%",
          flexWrap: "wrap",
          backgroundColor: "#f9f9f9",
          overflow: "hidden",
        }}
      >
        
        <div style={{ flex: "1 1 45%", textAlign: "center" }}>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            <img
              src={service.topSectionImage}
              alt={service.name}
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "16px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 1.5s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>

       
        <div
          style={{
            flex: "1 1 45%",
            color: "#333",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#228B22",
              textAlign: "justify",
              position: "relative",
              zIndex: 2,
            }}
          >
            {service.name}
          </h1>

        
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "-80px",
              width: "180px",
              height: "180px",
              zIndex: 1,
            }}
          >
            <AnimatedLottie />
          </div>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.7",
              color: "#555",
              marginBottom: "25px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {service.topSectionDescription}
          </p>

          
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "10px",
              flexWrap: "wrap",
            }}
          >
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#228B22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  animation: `spin 3s linear infinite`,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                ⚙️
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <WhyChooseUs service={service} />

      <OurPartners service={service} />

      <ServiceDescription service={service} />


     

     
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
