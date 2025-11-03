import React from "react";
import useScrollFade from "../hooks/useScrollFade";

export default function ServiceDescription({ service }) {
  const fadeStyle = useScrollFade() || { opacity: 1, transform: "translateY(0)" };

  if (!service || !service.detailedDescription || service.detailedDescription.length === 0)
    return <p style={{ textAlign: "center" }}>No details available.</p>;

  const overviewSections = service.detailedDescription.filter(p => p.type !== "benefit");
  const benefits = service.detailedDescription.filter(p => p.type === "benefit");

  return (
    <section
      style={{
        ...fadeStyle,
        padding: "80px 6%",
        maxWidth: "1400px",
        margin: "0 auto",
        color: "#1a1a1a",
        fontFamily: "Inter, sans-serif",
      }}
    >
      
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <h4
          style={{
            fontSize: "2.1rem",
            fontWeight: "800",
            color: "#228B22",
            marginBottom: "10px",
          }}
        >
          What You Get with {service.name}
        </h4>
        <p style={{ fontSize: "1.2rem", color: "#555", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
          Discover how {service.name} delivers real-world value through innovation, scalability, and eco-smart solutions built to empower your goals.
        </p>
        <button
          style={{
            marginTop: "25px",
            backgroundColor: "#228B22",
            color: "#fff",
            border: "none",
            padding: "14px 30px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 6px 20px rgba(34,139,34,0.25)",
            transition: "background 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={e => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.target.style.transform = "scale(1)")}
        >
          Get a Free Consultation
        </button>
      </div>

      
      {overviewSections.map((p, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            gap: "50px",
            marginBottom: "70px",
            backgroundColor: index % 2 === 0 ? "rgba(34,139,34,0.05)" : "#fff",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          className="section-card"
        >
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#228B22",
                marginBottom: "15px",
              }}
            >
              {p.heading}
            </h3>
            <p style={{ color: "#444", fontSize: "1.15rem", lineHeight: "1.8", marginBottom: "20px" }}>
              {p.content}
            </p>
            <button
              style={{
                backgroundColor: "transparent",
                border: "2px solid #228B22",
                color: "#228B22",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "#228B22";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#228B22";
              }}
            >
              Learn More
            </button>
          </div>

          {p.imageUrl && (
            <div style={{ flex: 1 }}>
              <img
                src={p.imageUrl}
                alt={p.heading}
                loading="lazy"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                className="section-image"
              />
            </div>
          )}
        </div>
      ))}

      
      {benefits.length > 0 && (
        <div style={{ marginTop: "90px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#228B22",
              textAlign: "center",
              marginBottom: "45px",
            }}
          >
            Key Benefits
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "35px",
            }}
          >
            {benefits.map((b, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 280px",
                  backgroundColor: "rgba(34,139,34,0.08)",
                  borderRadius: "16px",
                  padding: "30px",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                className="benefit-card"
              >
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    backgroundColor: "#228B22",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    width="28px"
                    height="28px"
                  >
                    <path d="M20.285 6.709l-11.025 11.025-5.547-5.548 1.414-1.414 4.133 4.132 9.611-9.611z" />
                  </svg>
                </div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px" }}>
                  {b.heading}
                </h4>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>{b.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      
      <style>
        {`
          .section-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 14px 35px rgba(0,0,0,0.15);
          }

          .section-image:hover {
            transform: scale(1.04);
          }

          .benefit-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.14);
          }

          @media (max-width: 1000px) {
            .section-card { flex-direction: column !important; padding: 30px; }
            .section-card img { width: 100%; }
          }

          @media (max-width: 600px) {
            section { padding: 50px 4%; }
            h2 { font-size: 2rem; }
            p { font-size: 1rem; }
          }
        `}
      </style>
    </section>
  );
}
