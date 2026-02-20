import { useState } from "react";
import {
  Home,
  Percent,
  Clock,
  FileText,
  Calculator,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import PageBanner from "../../../components/common/PageBanner";
import Breadcrumb from "../../../components/common/Breadcrumb";
import "../services.css";

export default function HomeLoan() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="premium-page">
      <PageBanner title="Home Loan" />

      <div className="container">
        <Breadcrumb page="Home Loan" />
      </div>

      <section className="container premium-section">

        {/* HERO SECTION */}
        <div className="loan-hero">
          <div>
            <h2>Make Your Dream Home a Reality</h2>
            <p>
              Get instant home loan approval with low interest rates and
              flexible repayment options up to 30 years.
            </p>
            <button className="apply-btn" onClick={() => setShowForm(true)}>
              Apply Now
            </button>
          </div>

          <div className="loan-highlight-card">
            <Percent size={40} />
            <h3>Starting @ 8.25% p.a.</h3>
            <p>Interest Rate</p>
          </div>
        </div>

        {/* FEATURES */}
        <h3 className="section-title">Loan Features</h3>
        <div className="card-grid">
          <div className="feature-card">
            <Percent size={28} />
            <h4>Low Interest</h4>
            <p>Competitive rates with flexible options.</p>
          </div>

          <div className="feature-card">
            <Clock size={28} />
            <h4>Fast Approval</h4>
            <p>Quick verification & 48-hour processing.</p>
          </div>

          <div className="feature-card">
            <Home size={28} />
            <h4>Up to ₹1 Crore</h4>
            <p>High-value loans with flexible tenure.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={28} />
            <h4>Secure Process</h4>
            <p>Safe, RBI-compliant loan processing.</p>
          </div>
        </div>

        {/* ELIGIBILITY + DOCUMENTS */}
        <div className="loan-info-grid">
          <div className="info-card">
            <h4>Eligibility</h4>
            <ul>
              <li>Salaried or self-employed</li>
              <li>Minimum age: 21 years</li>
              <li>Stable income source</li>
              <li>Good credit score (700+ recommended)</li>
            </ul>
          </div>

          <div className="info-card">
            <FileText size={26} />
            <div>
              <h4>Documents Required</h4>
              <ul>
                <li>PAN Card</li>
                <li>Aadhaar Card</li>
                <li>Income Proof (Salary Slip / ITR)</li>
                <li>Bank Statements (6 months)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EMI CALCULATOR PREVIEW */}
        <div className="emi-card">
          <Calculator size={32} />
          <div>
            <h4>EMI Calculator</h4>
            <p>
              Plan your finances better. Use our smart EMI calculator before
              applying.
            </p>
          </div>
          <button className="outline-btn">Calculate EMI</button>
        </div>

        {/* APPLICATION FORM */}
        {showForm && (
          <div className="premium-form-wrapper">
            <h3>Home Loan Application Form</h3>
            <form className="premium-form">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Mobile Number" />
              <input type="number" placeholder="Loan Amount (₹)" />
              <input type="number" placeholder="Monthly Income (₹)" />
              <select>
                <option>Employment Type</option>
                <option>Salaried</option>
                <option>Self-Employed</option>
              </select>
              <textarea placeholder="Property Details" />
              <button type="submit" className="apply-btn">
                Submit Application
              </button>
            </form>
          </div>
        )}

        {/* FAQ */}
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-card">
          <HelpCircle size={24} />
          <div>
            <h4>What is the maximum tenure?</h4>
            <p>Home loans are available up to 30 years tenure.</p>
          </div>
        </div>

      </section>
    </div>
  );
}
