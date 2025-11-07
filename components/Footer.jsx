"use client";
import React from "react";
import "../styles/bootstrap-replacement.css"; 

const Footer = () => {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row g-4">
        
          <div className="col-lg-4 col-md-6">
            <div className="footer-about d-flex align-items-start">
              <img
                src="/images/logo.webp"
                alt="The Anchorage Group Logo"
                className="footer-logo me-3"
              />

              <div>
                <h3 className="footer-title">The Anchorage Group</h3>
                <p className="mb-4">
                  We're dedicated to delivering innovative solutions that
                  empower businesses to thrive in the digital age.
                </p>

                <div className="social-links mb-4">
                  <a href="#" className="social-link">
                    <img src="/icons/facebook.svg" alt="Facebook" />
                  </a>
                  <a href="#" className="social-link">
                    <img src="/icons/instagram.svg" alt="Instagram" />
                  </a>
                  <a href="#" className="social-link">
                    <img src="/icons/whatsapp.svg" alt="WhatsApp" />
                  </a>
                  <a href="#" className="social-link">
                    <img src="/icons/youtube.svg" alt="YouTube" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-lg-2 col-md-6">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

         
          <div className="col-lg-2 col-md-6">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>

          
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-title">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for updates, news, and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Enter your email"
                />
                <button className="btn btn-subscribe text-white" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="small">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>

      
        <div className="footer-bottom mt-5">
          <div className="container">
            <div className="row py-3">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0">
                  &copy; 2025 THEANCHORAGEGROUP. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style jsx>{`
        .footer {
          background-color: #1c1c1c;
          color: white;
          padding: 1rem 1rem;
          font-size: 1rem;
        }

        .footer-title {
          color: #fff;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 30px;
          height: 2px;
          background: #6c5ce7;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 1rem;
        }

        .footer-links a {
          color: #b4b6bb;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
          padding-left: 5px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-link img {
          width: 28px;
          height: 28px;
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .social-link:hover img {
          filter: brightness(0) saturate(100%) sepia(100%) hue-rotate(90deg)
            saturate(500%) brightness(0.9);
          transform: translateY(-2px);
        }

        .newsletter-input {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .newsletter-input:focus {
          background: rgba(255, 255, 255, 0.15);
          border-color: #6c5ce7;
          color: #ffffff;
          box-shadow: none;
        }

        .btn-subscribe {
          background: #6c5ce7;
          border: none;
          padding: 0.5rem 1.5rem;
          transition: all 0.3s ease;
        }

        .btn-subscribe:hover {
          background: #5a4bd1;
          transform: translateY(-2px);
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          margin-top: 2rem;
        }

        .footer-bottom a {
          color: #6c5ce7;
          text-decoration: none;
        }

        .footer-bottom a:hover {
          color: #ffffff;
        }

        .footer-logo {
          width: 300px;
          height: auto;
          object-fit: contain;
          flex-shrink: 0;
        }

        .footer-about {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-left: -200px;
        }

        @media (max-width: 768px) {
          .footer-about {
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            text-align: center;
          }

          .footer-logo {
            margin-bottom: 1rem;
          }
        }

        .footer-links-wrapper {
          display: flex;
          flex: 1 1 400px;
          gap: 2rem;
          flex-wrap: wrap;
        }

        @media (max-width: 576px) {
          .footer-links-wrapper {
            flex-direction: row;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
          }

          .footer-links-section {
            flex: 1;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
