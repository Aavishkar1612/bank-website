import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>AB FINTECH</h1>

        <p>
          Experience secure, fast and intelligent banking with AB Fintech.
          Manage accounts, apply loans and access digital banking anytime,
          anywhere.
        </p>

        <div className="hero-buttons">
          <Link to="/services" className="btn-primary">
            Open an Account
          </Link>

          <Link to="/about" className="btn-secondary">
            Explore Services
          </Link>
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div className="stat-card">
            <h2>5M+</h2>
            <p>Customers</p>
          </div>

        
          <div className="stat-card">
            <h2>24/7</h2>
            <p>Digital Banking</p>
          </div>

          <div className="stat-card">
            <h2>99.9%</h2>
            <p>Secure Transactions</p>
          </div>
        </div>
      </div>

    </section>
  );
}