"use client"
import React from "react";
import {  useRouter } from "next/navigation";


const Link = ({to,style,children})=>{
  const router = useRouter()
  const onClick = ()=>{
    router.push(to)
  }
  return(
    <div onClick= {onClick} style={style} className="flex">
      {children}
    </div>
  )

}

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "400px",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
          const img = e.currentTarget.querySelector("img");
          if (img) img.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.1)";
          const img = e.currentTarget.querySelector("img");
          if (img) img.style.transform = "scale(1)";
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <img
            src={service.topSectionImage}
            alt={service.name}
            loading="lazy"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s ease",
              willChange: "transform",
            }}
          />
        </div>

        <div style={{ padding: "12px 16px" }}>
          <h3 style={{ margin: "8px 0", color: "#228B22", fontSize: "1.1rem" }}>
            {service.name}
          </h3>
          <p style={{ margin: 0, color: "#444", fontSize: "0.95rem" }}>
            {service.topSectionDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
