import { useState } from "react";
import {
  Zap,
  Percent,
  Clock,
  FileText,
  Wallet,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import "../services.css";

export default function PersonalLoan() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="premium-page">
      <section className="container premium-section">

        {/* HERO SECTION */}
        <div className="loan-hero personal-hero">
          <div>
            <h2>Instant Personal Loans</h2>
            <p>
              Get quick funds for travel, weddings, medical emergencies or any
              personal need with minimal documentation.
            </p>
            <button className="apply-btn" onClick={() => setShowForm(true)}>
              Apply Now
            </button>
          </div>

          <div className="loan-highlight-card">
            <Percent size={40} />
            <h3>Starting @ 10.5% p.a.</h3>
            <p>Interest Rate</p>
          </div>
        </div>

        {/* FEATURES */}
        <h3 className="section-title">Why Choose Our Personal Loan?</h3>
        <div className="card-grid">
          <div className="feature-card">
            <Zap size={28} />
            <h4>Instant Approval</h4>
            <p>Fast verification & quick disbursal.</p>
          </div>

          <div className="feature-card">
            <FileText size={28} />
            <h4>Minimal Documents</h4>
            <p>Simple KYC & income proof process.</p>
          </div>

          <div className="feature-card">
            <Clock size={28} />
            <h4>Flexible Tenure</h4>
            <p>Repayment options from 12–60 months.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={28} />
            <h4>Secure Processing</h4>
            <p>Safe & RBI-compliant loan system.</p>
          </div>
        </div>

        {/* LOAN PURPOSE CARDS */}
        <h3 className="section-title">Popular Uses</h3>
        <div className="card-grid">
          <div className="feature-card">
            <Wallet size={28} />
            <h4>Medical Emergency</h4>
            <p>Cover urgent hospital & treatment costs.</p>
          </div>

          <div className="feature-card">
            <Wallet size={28} />
            <h4>Wedding Expenses</h4>
            <p>Manage wedding arrangements stress-free.</p>
          </div>

          <div className="feature-card">
            <Wallet size={28} />
            <h4>Travel Plans</h4>
            <p>Fund your dream vacation instantly.</p>
          </div>

          <div className="feature-card">
            <Wallet size={28} />
            <h4>Home Renovation</h4>
            <p>Upgrade your home interiors easily.</p>
          </div>
        </div>

        {/* ELIGIBILITY + DOCUMENTS */}
        <div className="loan-info-grid">
          <div className="info-card">
            <h4>Eligibility</h4>
            <ul>
              <li>Age between 21–60 years</li>
              <li>Stable monthly income</li>
              <li>Good credit score (650+ recommended)</li>
              <li>Salaried or self-employed</li>
            </ul>
          </div>

          <div className="info-card">
            <FileText size={26} />
            <div>
              <h4>Documents Required</h4>
              <ul>
                <li>PAN Card</li>
                <li>Aadhaar Card</li>
                <li>Salary Slip / ITR</li>
                <li>Bank Statement (3–6 months)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EMI PREVIEW CARD */}
        <div className="emi-card">
          <Percent size={32} />
          <div>
            <h4>Plan Your EMI</h4>
            <p>
              Check your estimated EMI before applying and choose the right
              repayment tenure.
            </p>
          </div>
          <button className="outline-btn">Calculate EMI</button>
        </div>

        {/* APPLICATION FORM */}
        {showForm && (
          <div className="premium-form-wrapper">
            <h3>Personal Loan Application</h3>
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
              <textarea placeholder="Purpose of Loan" />
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
            <h4>How quickly will I receive funds?</h4>
            <p>After approval, funds are usually disbursed within 24–48 hours.</p>
          </div>
        </div>

      </section>
    </div>
  );
}
