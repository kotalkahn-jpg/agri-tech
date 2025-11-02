import React from "react";
import Lottie from "lottie-react";
import droneAnimation from "@/public/images/Drone.json"; 

export default function AnimatedLottie() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        animation: "float 4s ease-in-out infinite alternate",
      }}
    >
      <Lottie
        animationData={droneAnimation}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      />
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}
