import React from "react";

export default function AnimatedLines() {
  const lines = [0, 1, 2];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {lines.map((_, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: "200%",
            height: "50px", 
            background:
              "linear-gradient(90deg, rgba(34,139,34,0.3), rgba(34,139,34,0))",
            transform: `rotate(35deg) translateY(${index * 150}px)`,
            top: `${index * 25}%`,
            left: "-50%",
            animation: `driftLine 15s linear infinite`,
            animationDelay: `${index * 5}s`,
            opacity: 0.5,
          }}
        />
      ))}

      <style>
        {`
          @keyframes driftLine {
            0% {
              transform: rotate(35deg) translateX(-50%) translateY(0);
            }
            50% {
              transform: rotate(35deg) translateX(25%) translateY(10px);
            }
            100% {
              transform: rotate(35deg) translateX(100%) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
