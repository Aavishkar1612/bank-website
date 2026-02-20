import React from "react";
import "../services.css";


/* ============================= */
/*        DATA CONFIG            */
/* ============================= */

const features = [
  {
    title: "Fund Transfers",
    description:
      "Instantly transfer money using NEFT, RTGS and IMPS with real-time tracking.",
  },
  {
    title: "Bill Payments",
    description:
      "Pay electricity, mobile, broadband and utility bills in one place without hassle.",
  },
  {
    title: "Account Statements",
    description:
      "Download statements, view transaction history and monitor spending anytime.",
  },
  {
    title: "24/7 Secure Access",
    description:
      "Multi-layer security, OTP verification and encrypted transactions keep your account safe.",
  },
];

const benefits = [
  {
    title: "Easy to Use",
    description:
      "Simple interface designed for customers of all age groups.",
  },
  {
    title: "Instant Transactions",
    description:
      "Transfer funds and pay bills in seconds without visiting branch.",
  },
  {
    title: "High Security",
    description:
      "Advanced authentication and fraud protection systems.",
  },
  {
    title: "Paperless Banking",
    description:
      "Manage everything digitally — no forms, no waiting lines.",
  },
];

/* ============================= */
/*        COMPONENT              */
/* ============================= */

export default function InternetBanking() {
  return (
    <div className="service-page">
      
      {/* ================= HERO ================= */}
      <section className="service-hero">
        <h1>Internet Banking</h1>
        <p>
          Experience secure, fast and convenient banking from anywhere.
          Manage your accounts, transfer funds and pay bills with complete safety.
        </p>

        <div className="service-cta">
          <button type="button" className="primary-btn">
            Login to Internet Banking
          </button>
          <button type="button" className="secondary-btn">
            Register Now
          </button>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
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

      {/* ================= BENEFITS ================= */}
      <section className="service-section light">
        <h2>Why Choose Our Internet Banking?</h2>

        <div className="service-grid">
          {benefits.map((item, index) => (
            <div key={index} className="service-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="service-bottom-cta">
        <h2>Start Banking Online Today</h2>
        <p>
          Join thousands of customers using secure and smart digital banking.
        </p>
        <button type="button" className="primary-btn large">
          Activate Internet Banking
        </button>
      </section>
    </div>
  );
}
