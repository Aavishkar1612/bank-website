import React from "react";
import "../services.css";

/* ============================= */
/*        DATA CONFIG            */
/* ============================= */

const features = [
  {
    title: "Fund Transfer Simulation",
    description:
      "Simulated NEFT, RTGS and IMPS transactions for academic demonstration purposes.",
  },
  {
    title: "Bill Payment Demo",
    description:
      "Practice utility bill payment workflows in a controlled demo environment.",
  },
  {
    title: "Account Statement Preview",
    description:
      "View sample transaction history and downloadable statement formats.",
  },
  {
    title: "Security Demonstration",
    description:
      "OTP validation and authentication flow shown for educational understanding.",
  },
];

const benefits = [
  {
    title: "Student Friendly Interface",
    description:
      "Designed for learning banking workflows in a simple and structured way.",
  },
  {
    title: "Realistic Banking Simulation",
    description:
      "Mimics real-world digital banking features without processing real money.",
  },
  {
    title: "Security Concepts",
    description:
      "Demonstrates authentication, authorization and fraud awareness concepts.",
  },
  {
    title: "Paperless Workflow Demo",
    description:
      "Shows how digital banking replaces traditional branch-based processes.",
  },
];

/* ============================= */
/*        COMPONENT              */
/* ============================= */

export default function InternetBanking() {
  return (
    <div className="service-page">

      {/* ================= DISCLAIMER ================= */}
      <div
        style={{
          backgroundColor: "#fff3cd",
          color: "#856404",
          padding: "15px",
          textAlign: "center",
          fontWeight: "600",
          borderBottom: "1px solid #ffeeba",
        }}
      >
        ⚠ This is a Academic Demo Project created by Aavishkar Bhosale.
        This website does NOT provide real banking services.
        Please do NOT enter real personal or financial credentials.
      </div>

      {/* ================= HERO ================= */}
      <section className="service-hero">
        <h1>Digital Banking Simulation Portal</h1>
        <p>
          Experience a simulated digital banking environment built for
          academic demonstration. Learn how online banking systems function,
          including transfers, bill payments and security workflows.
        </p>

        <div className="service-cta">
          <button type="button" className="primary-btn">
            Demo Login Portal
          </button>
          <button type="button" className="secondary-btn">
            Create Demo Account
          </button>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="service-section">
        <h2>Simulation Features</h2>

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
        <h2>Why This Project?</h2>

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
        <h2>Explore Digital Banking Concepts</h2>
        <p>
          This project demonstrates modern banking architecture,
          authentication systems and transaction workflows for learning purposes.
        </p>
        <button type="button" className="primary-btn large">
          Launch Demo System
        </button>
      </section>
    </div>
  );
}