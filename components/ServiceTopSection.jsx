import React from "react";

export default function ServiceTopSection({ service }) {
  if (!service) return null;

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 10%",
        flexWrap: "wrap",
        backgroundColor: "#f9f9f9",
      }}
    >
      
      <div
        style={{
          flex: "1 1 45%",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src={service.imageUri}
          alt={service.name}
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      <div
        style={{
          flex: "1 1 45%",
          color: "#333",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "20px",
            color: "#228B22",
          }}
        >
          {service.name}
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.7",
            color: "#555",
          }}
        >
          {service.shortDescription}
        </p>
      </div>
    </section>
  );
}
