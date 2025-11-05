"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/custom.css"; 

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
      (response) => {
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
    <section className="py-5" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">Contact Us</h1>
        <p className="text-muted">
          Have a question or want to work with us? We’d love to hear from you.
        </p>
      </div>

      <div className="row g-4">
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

              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

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
    </section>
  );
}
