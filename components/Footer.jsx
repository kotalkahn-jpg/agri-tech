"use client";
import React from "react";
import "../styles/footer.css";
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
                  We're dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.
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
                <p className="mb-0">&copy; 2025 THEANCHORAGEGROUP. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
