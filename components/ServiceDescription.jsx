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
        padding: "60px 5%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      
      {overviewSections.map((p, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            gap: "40px",
            marginBottom: "60px",
            backgroundColor: index % 2 === 0 ? "rgba(34,139,34,0.05)" : "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
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
            <p style={{ color: "#555", fontSize: "1.15rem", lineHeight: "1.8" }}>
              {p.content}
            </p>
          </div>

          
          {p.imageUrl && (
            <div style={{ flex: 1 }}>
              <img
                src={p.imageUrl}
                alt={p.heading}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                className="section-image"
              />
            </div>
          )}
        </div>
      ))}

      
      {benefits.length > 0 && (
        <div style={{ marginTop: "80px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#228B22",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Key Benefits
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {benefits.map((b, idx) => (
              <div
                key={idx}
                style={{
                  flex: "1 1 250px",
                  backgroundColor: "rgba(34,139,34,0.08)",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
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
                    width: "50px",
                    height: "50px",
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
                    width="24px"
                    height="24px"
                  >
                    <path d="M20.285 6.709l-11.025 11.025-5.547-5.548 1.414-1.414 4.133 4.132 9.611-9.611z" />
                  </svg>
                </div>

                <h4 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px" }}>
                  {b.heading}
                </h4>
                <p style={{ fontSize: "1rem", color: "#555", lineHeight: "1.6" }}>
                  {b.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          /* Overview card hover */
          .section-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.12);
          }

          /* Image hover */
          .section-image:hover {
            transform: scale(1.02);
          }

          /* Benefit card hover */
          .benefit-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.12);
          }

          @media (max-width: 900px) {
            .section-card { flex-direction: column !important; }
          }
        `}
      </style>
    </section>
  );
}
