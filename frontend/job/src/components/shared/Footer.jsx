
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Job Find</h5>
            <p>Find your dream job with Job Find. Explore thousands of opportunities in top industries.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/jobs" className="footer-link">Jobs</a></li>
              <li><a href="/profile" className="footer-link">Profile</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} Job Find. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
