"use client";

import React from "react";

export default function TestMessage() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "400px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        gap: "50px",
        flexWrap: "wrap",
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
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Who We Are
        </h2>

        <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "100%" }}>
          here at the anchorage, we believe in empowering agricultural communities through technology and innovation.
          We bring together local expertise and global thinking to build sustainable solutions for the future.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {[
            "Innovation‑driven solutions",
            "Community‑focused approach",
            "Sustainability & impact",
            "Reliable support & guidance",
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#fff",
                padding: "12px 20px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                fontWeight: "500",
                color: "#228B22",
                minWidth: "180px",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
