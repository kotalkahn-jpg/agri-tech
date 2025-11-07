"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/bootstrap-replacement.css"; 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_cj17yea";
    const templateID = "template_xs8dzgs";
    const publicKey = "9vZAxScS35t21eFj7";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Oops! Something went wrong. Please try again later.");
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <section className="py-5 contact-page" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">Contact Us</h1>
        <p className="text-muted">
          Have a question or want to work with us? We’d love to hear from you.
        </p>
      </div>

      <div className="row g-4">
        {/* LEFT SIDE: Contact form */}
        <div className="col-md-7" style={{ marginLeft: "-15px" }}>
          <div
            className="card shadow-sm border-0 p-5 h-100"
            style={{ minHeight: "500px", borderRadius: "15px" }}
          >
            <h5 className="fw-semibold mb-4 text-success">Send us a message</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-button-container">
                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 fw-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/*  Contact info */}
        <div className="col-md-5">
          <div className="card contact-right-card p-5 h-100">
            <div className="card-content">
              <h5 className="fw-semibold mb-4 text-success">Contact Information</h5>
              <p className="text-white mb-4">
                We’re always available to assist you. Reach us through any of the following ways:
              </p>

              <div className="d-flex align-items-start mb-3">
                <span className="me-3 fs-4 text-success">&#9993;</span>
                <div>
                  <strong>Email</strong>
                  <p className="mb-0 text-white">theanchoragegroup.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-3">
                <span className="me-3 fs-4 text-success">&#9742;</span>
                <div>
                  <strong>Phone</strong>
                  <p className="mb-0 text-white">+265 997650057</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <span className="me-3 fs-4 text-success">&#127970;</span>
                <div>
                  <strong>Office Address</strong>
                  <p className="mb-0 text-white">Olympic Mall, Lilongwe, Malawi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style jsx>{`
        body {
          background-color: #eeeeee;
          font-family: 'Segoe UI', sans-serif;
        }

        :root {
          --bs-primary: #28a745;
        }

        .card,
        .form-control,
        .btn {
          border-radius: 0 !important;
        }

        .contact-right-card {
          position: relative;
          color: white;
          overflow: hidden;
          background: url('/images/contact-background.jpg') no-repeat center center;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-right-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.35);
          z-index: 0;
        }

        .contact-right-card > .card-content {
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .contact-right-card,
          .card.shadow-sm {
            height: 100%;
          }
        }

        @media (max-width: 768px) {
          .contact-right-card,
          .card.shadow-sm {
            height: auto;
          }
        }

        h1 {
          font-size: 2.2rem;
          font-weight: 700;
          color: #19692c;
          margin-bottom: 1rem;
        }

        h5 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #28a745;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
          color: #444;
        }

        label {
          font-size: 0.95rem;
        }

        .btn {
          font-size: 1rem;
          text-transform: none;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem;
          }

          h5 {
            font-size: 1.1rem;
          }

          p {
            font-size: 0.95rem;
          }
        }

        .social-links {
          display: flex;
          gap: 12px;
        }

        .social-link img {
          width: 32px;
          height: 32px;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .social-link:hover img {
          filter: brightness(0) saturate(100%) sepia(100%) hue-rotate(90deg)
            saturate(500%) brightness(0.9);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .social-link img {
            width: 28px;
            height: 28px;
          }
        }

        @media (max-width: 480px) {
          .social-link img {
            width: 24px;
            height: 24px;
          }
        }

        .form-button-container {
          margin-top: 1rem;
        }
      `}</style>
    </section>
  );
}
