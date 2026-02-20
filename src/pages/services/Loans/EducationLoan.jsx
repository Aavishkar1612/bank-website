import { useState } from "react";
import {
  GraduationCap,
  Percent,
  Globe,
  FileText,
  Clock,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import "../services.css";

export default function EducationLoan() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="premium-page">
      <section className="container premium-section">

        {/* HERO SECTION */}
        <div className="loan-hero education-hero">
          <div>
            <h2>Invest in Your Future with Education Loan</h2>
            <p>
              Finance your higher education in India or abroad with affordable
              interest rates and flexible repayment options.
            </p>
            <button className="apply-btn" onClick={() => setShowForm(true)}>
              Apply Now
            </button>
          </div>

          <div className="loan-highlight-card">
            <Percent size={40} />
            <h3>Starting @ 7.95% p.a.</h3>
            <p>Interest Rate</p>
          </div>
        </div>

        {/* FEATURES */}
        <h3 className="section-title">Loan Features</h3>
        <div className="card-grid">
          <div className="feature-card">
            <Percent size={28} />
            <h4>Low Interest Rates</h4>
            <p>Affordable rates for domestic & international studies.</p>
          </div>

          <div className="feature-card">
            <Clock size={28} />
            <h4>Moratorium Period</h4>
            <p>Repayment starts after course completion.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={28} />
            <h4>Tax Benefits</h4>
            <p>Claim tax deduction under Section 80E.</p>
          </div>

          <div className="feature-card">
            <GraduationCap size={28} />
            <h4>Complete Coverage</h4>
            <p>Covers tuition, hostel, books & living expenses.</p>
          </div>
        </div>

        {/* STUDY DESTINATIONS */}
        <h3 className="section-title">Study Options Covered</h3>
        <div className="card-grid">
          <div className="feature-card">
            <GraduationCap size={28} />
            <h4>Study in India</h4>
            <p>Loans for undergraduate & postgraduate programs.</p>
          </div>

          <div className="feature-card">
            <Globe size={28} />
            <h4>Study Abroad</h4>
            <p>Funding for USA, UK, Canada, Australia & more.</p>
          </div>
        </div>

        {/* ELIGIBILITY + DOCUMENTS */}
        <div className="loan-info-grid">
          <div className="info-card">
            <h4>Eligibility</h4>
            <ul>
              <li>Indian citizen</li>
              <li>Confirmed admission in recognized institution</li>
              <li>Co-applicant (Parent/Guardian)</li>
              <li>Good academic background</li>
            </ul>
          </div>

          <div className="info-card">
            <FileText size={26} />
            <div>
              <h4>Documents Required</h4>
              <ul>
                <li>Admission Letter</li>
                <li>PAN & Aadhaar Card</li>
                <li>Academic Records</li>
                <li>Income Proof of Co-applicant</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MORATORIUM INFO CARD */}
        <div className="emi-card">
          <Clock size={32} />
          <div>
            <h4>Moratorium Benefit</h4>
            <p>
              No EMI during course duration + 6 to 12 months after completion.
              Pay only simple interest during study period.
            </p>
          </div>
        </div>

        {/* APPLICATION FORM */}
        {showForm && (
          <div className="premium-form-wrapper">
            <h3>Education Loan Application</h3>
            <form className="premium-form">
              <input type="text" placeholder="Student Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Mobile Number" />
              <input type="text" placeholder="Course Name" />
              <input type="number" placeholder="Loan Amount Required (₹)" />
              <select>
                <option>Study Location</option>
                <option>India</option>
                <option>Abroad</option>
              </select>
              <textarea placeholder="Institution Details" />
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
            <h4>When does repayment start?</h4>
            <p>
              Repayment begins after completion of the course plus the
              moratorium period.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
