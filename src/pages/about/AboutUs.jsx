import { Link } from "react-router-dom";
import "./about.css";
import chairmanImg from "../../assets/images/chairman.png";

export default function AboutUs() {
  return (
    <div className="about-container">

      {/* BANNER */}
      <div className="about-banner">
        <h1>About AB Fintech</h1>
        <p>
          Empowering customers with secure, modern and accessible banking
          solutions across India.
        </p>
      </div>

      {/* ABOUT NAVIGATION LINKS */}
      <div className="about-links">
        <Link to="/about/vision-mission" className="about-link-btn">
          Vision & Mission
        </Link>

        <Link to="/about/chairman-message" className="about-link-btn">
          Chairman Message
        </Link>

        <Link to="/about/board-of-directors" className="about-link-btn">
          Board of Directors
        </Link>

        <Link to="/about/management-team" className="about-link-btn">
          Management Team
        </Link>

        <Link to="/about/annual-reports" className="about-link-btn">
          Annual Reports
        </Link>
      </div>

      {/* INTRO */}
      <div className="about-card">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-subtitle">
          AB Fintech is a customer-first digital banking platform focused on
          innovation, security and trust. We provide reliable financial
          services for individuals, businesses and institutions.
        </p>

        <p>
          Our goal is to simplify banking with modern technology while keeping
          the human connection strong. From savings accounts to loans and
          digital banking solutions, we serve thousands of customers with
          commitment and transparency.
        </p>
      </div>

      {/* VISION & MISSION */}
      <div className="vm-grid">
        <div className="vm-box">
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted digital banking partner delivering
            seamless and innovative financial services for every customer.
          </p>
        </div>

        <div className="vm-box">
          <h3>Our Mission</h3>
          <p>
            To provide secure, fast and accessible banking services powered by
            technology while maintaining transparency and customer satisfaction.
          </p>
        </div>
      </div>

      {/* IMPACT STATS */}
      <div className="about-card">
        <h2 className="about-title">Our Impact</h2>

        <div className="board-grid">
          <div className="member-card">
            <h4>10+ Years</h4>
            <p>Banking Experience</p>
          </div>

          <div className="member-card">
            <h4>50K+</h4>
            <p>Happy Customers</p>
          </div>

          <div className="member-card">
            <h4>35+</h4>
            <p>Branches Across India</p>
          </div>

          <div className="member-card">
            <h4>24/7</h4>
            <p>Digital Banking Support</p>
          </div>
        </div>
      </div>

      {/* CHAIRMAN MESSAGE */}
      <div className="about-card chairman">

        <img src={chairmanImg} alt="Chairman" />

        <div className="chairman-text">
          <h2 className="about-title">Chairman’s Message</h2>
          <p>
            At AB Fintech, our focus has always been on building trust and
            delivering excellence. We believe banking should be simple,
            accessible and secure for everyone.
          </p>

          <p>
            We continue to invest in technology and people to ensure that our
            customers receive the best banking experience possible.
          </p>
        </div>

      </div>

      {/* CORE VALUES */}
      <div className="about-card">
        <h2 className="about-title">Our Core Values</h2>

        <div className="board-grid">
          <div className="member-card">
            <h4>Trust</h4>
            <p>We build long-term relationships through transparency.</p>
          </div>

          <div className="member-card">
            <h4>Innovation</h4>
            <p>Technology-driven solutions for modern banking needs.</p>
          </div>

          <div className="member-card">
            <h4>Customer First</h4>
            <p>Every service designed around customer convenience.</p>
          </div>

          <div className="member-card">
            <h4>Security</h4>
            <p>Advanced protection for every transaction and data.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
