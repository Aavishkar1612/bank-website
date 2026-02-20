import React, { useState } from "react";
import "../services.css";

/* =============================
   DATA CONFIG
============================= */

const features = [
  {
    title: "Unlimited Transactions",
    description:
      "Enjoy unlimited deposits and withdrawals to manage your business operations smoothly.",
  },
  {
    title: "Overdraft Facility",
    description:
      "Access additional funds instantly to handle short-term financial needs.",
  },
  {
    title: "Business Debit Card",
    description:
      "Dedicated debit card with higher transaction limits for business expenses.",
  },
  {
    title: "Digital Banking Access",
    description:
      "Secure net banking and mobile banking for 24/7 account control.",
  },
];

const benefits = [
  "Faster business payments",
  "Dedicated relationship manager",
  "Priority customer support",
  "Secure & encrypted transactions",
];

/* =============================
   COMPONENT
============================= */

export default function CurrentAccount() {
  const [showForm, setShowForm] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleOpenAccount = () => {
    setShowForm(!showForm);
    setShowGetStarted(false);
  };

  const handleGetStarted = () => {
    setShowGetStarted(!showGetStarted);
    setShowForm(false);
  };

  return (
    <div className="service-page">
      
      {/* HERO */}
      <section className="service-hero">
        <h1>Current Account</h1>
        <p>
          A powerful banking solution tailored for businesses, startups, and
          professionals who require seamless transactions and financial flexibility.
        </p>

        <div className="service-cta">
          <button className="primary-btn" onClick={handleOpenAccount}>
            Open Current Account
          </button>

          <button className="secondary-btn">
            Talk to Relationship Manager
          </button>
        </div>
      </section>

      {/* ===== OPEN ACCOUNT FORM (ADDED WITHOUT CHANGING UI) ===== */}
      {showForm && (
        <section className="service-section">
          <h2>Current Account Application Form</h2>

          <form className="account-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label>Business Name</label>
              <input type="text" placeholder="Enter business name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email" required />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter mobile number" required />
            </div>

            <div className="form-group full-width">
              <label>Business Address</label>
              <textarea placeholder="Enter business address" rows="3"></textarea>
            </div>

            <button type="submit" className="primary-btn">
              Submit Application
            </button>
          </form>
        </section>
      )}

      {/* FEATURES */}
      <section className="service-section">
        <h2>Key Features</h2>

        <div className="service-grid">
          {features.map((item, index) => (
            <div key={index} className="service-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="service-section light">
        <h2>Why Choose Our Current Account?</h2>

        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="service-bottom-cta">
        <h2>Empower Your Business Banking</h2>
        <p>
          Experience reliable, secure and efficient banking solutions designed
          to help your business grow.
        </p>
        <button className="primary-btn large" onClick={handleGetStarted}>
          Get Started Today
        </button>
      </section>

      {/* ===== GET STARTED EXTRA CONTENT (ADDED BELOW CTA) ===== */}
      {showGetStarted && (
        <section className="service-section light">
          <h2>How to Get Started</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Step 1</h3>
              <p>Fill out the application form with accurate business details.</p>
            </div>

            <div className="service-card">
              <h3>Step 2</h3>
              <p>Submit required KYC and business verification documents.</p>
            </div>

            <div className="service-card">
              <h3>Step 3</h3>
              <p>Your account will be activated within 24–48 hours.</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
