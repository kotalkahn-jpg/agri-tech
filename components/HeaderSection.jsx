import React, { useEffect, useState } from "react";
import "./HeaderSection.css";

export default function HeaderSection() {
  const slides = [
    {
      image: "/images/1.webp",
      title: "Empowering Modern Agriculture",
      text: "Innovative agri-tech solutions to boost productivity and sustainability.",
    },
    {
      image: "/images/2.webp",
      title: "Precision Meets Growth",
      text: "Smart farming tools designed to optimize resources and yield results.",
    },
    {
      image: "/images/3.webp",
      title: "Sustainability Through Innovation",
      text: "Technology that grows food while protecting the environment.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <div className="title-wrapper">
              <img
                src="/images/green-leaf.png"
                alt="Leaf Icon"
                className="leaf-icon"
              />
              <h1>{slide.title}</h1>
            </div>
            <p>{slide.text}</p>
            <button onClick={scrollToServices}>Explore Services ↓</button>
          </div>
        </div>
      ))}
    </header>
  );
}
