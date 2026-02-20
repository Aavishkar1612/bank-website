import React from "react";
import "./pages.css";

export default function Customer() {
  return (
    <div className="customer-page">

      <div className="customer-hero">
        <h1>Customer Services</h1>
        <p>
          We are committed to providing excellent support and seamless banking experience.
        </p>
      </div>

      <div className="customer-grid">

        <div className="customer-card">
          <h3>24/7 Support</h3>
          <p>Call our toll-free number anytime for assistance.</p>
          <span className="highlight">1800-123-4567</span>
          <button className="card-btn">Call Now</button>
        </div>

        <div className="customer-card">
          <h3>Online Help Desk</h3>
          <p>Submit your queries online and track status easily.</p>
          <button className="card-btn">Submit Query</button>
        </div>

        <div className="customer-card">
          <h3>Grievance Redressal</h3>
          <p>Quick resolution for complaints and disputes.</p>
          <button className="card-btn">Raise Complaint</button>
        </div>

        <div className="customer-card">
          <h3>FAQs</h3>
          <p>Find answers to common banking questions instantly.</p>
          <button className="card-btn">View FAQs</button>
        </div>

      </div>

    </div>
  );
}