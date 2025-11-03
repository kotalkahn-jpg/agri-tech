import React from "react";
import useScrollFade from "../hooks/useScrollFade";

export default function OurPartners({ service }) {
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
        background: "linear-gradient(to bottom, #ffffff, #f7fdf7)",
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

      {/* Logos Wrapper */}
      <div className="logos-wrapper">
        <div className="logos-inner">
          {service.partners.map((logo, index) => (
            <div key={index} className="logo-item">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Boundary */}
      <div className="bottom-boundary"></div>

      <style>{`
        .logos-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .logos-inner {
          display: flex;
          gap: 40px;
          flex-wrap: nowrap;
          justify-content: flex-start;
          animation: moveLogos 60s linear infinite;
        }

        .logo-item img {
          width: clamp(100px, 15vw, 180px);
          max-width: 100%;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.8;
          transition: transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease;
        }

        .logo-item img:hover,
        .logo-item img:focus {
          transform: scale(1.08);
          filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes moveLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }

        .bottom-boundary {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(to right, #1A531B, #4CAF50, #1A531B);
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          opacity: 0.8;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logos-inner {
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
            animation: none; /* stop marquee on smaller devices */
          }
          .logo-item img {
            width: clamp(120px, 25vw, 200px); /* larger logos for tablets */
          }
        }

        @media (max-width: 480px) {
          .our-partners-section h2 {
            font-size: 1.8rem;
          }
          .logo-item img {
            width: 140px; /* fixed larger size for small phones */
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
