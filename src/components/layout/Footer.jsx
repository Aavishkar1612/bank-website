import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>AB Fintech</h2>
          <p>
            AB Fintech is a next-generation digital banking platform delivering
            secure, fast, and customer-centric financial services.
          </p>

          <div className="footer-socials">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/customer">Customer Banking</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* BANKING SERVICES */}
        <div className="footer-links">
          <h4>Banking Services</h4>
          <Link to="/services">Savings Account</Link>
          <Link to="/services">Home Loan</Link>
          <Link to="/services">Digital Banking</Link>
          <Link to="/services">Fixed Deposit</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Customer Care: 1800-120-2026</p>
          <p>Email: support@abfintech.com</p>
          <p>Mumbai, India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AB Fintech. All Rights Reserved.
        </p>

        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Security</span>
        </div>
      </div>

    </footer>
  );
}
