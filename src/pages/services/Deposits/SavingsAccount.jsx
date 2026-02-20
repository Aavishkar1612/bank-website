import { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  CreditCard,
  Smartphone,
  Percent,
  FileText,
  Users,
  HelpCircle,
} from "lucide-react";
import PageBanner from "../../../components/common/PageBanner";
import Breadcrumb from "../../../components/common/Breadcrumb";
import "../services.css";

export default function SavingsAccount() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    pan: "",
    accountType: "Regular",
    nominee: "",
    seniorCitizen: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter valid email";
    if (!formData.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = "Enter valid 10-digit mobile";
    if (!formData.pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/))
      newErrors.pan = "Enter valid PAN (ABCDE1234F)";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setShowForm(false);
    console.log("Savings Account Application:", formData);
  };

  const openForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="premium-page">
      <PageBanner title="Savings Account" />
      <div className="container">
        <Breadcrumb page="Savings Account" />
      </div>

      <section className="container premium-section">
        {/* HERO SECTION */}
        <div className="premium-hero">
          <div>
            <h2>AB Fintech Smart Savings Account</h2>
            <p>
              Experience seamless digital banking with high interest returns,
              zero hidden charges and instant online onboarding.
            </p>
            <button className="apply-btn" onClick={openForm}>
              Open Account Now
            </button>
          </div>

          <div className="hero-highlight-card">
            <h3>Up to 4.5% p.a.</h3>
            <p>Interest Rate</p>
            <Percent size={40} />
          </div>
        </div>

        {/* FEATURE CARDS */}
        <h3 className="section-title">Why Choose Us</h3>
        <div className="card-grid">
          <div className="feature-card">
            <ShieldCheck size={28} />
            <h4>Secure Banking</h4>
            <p>RBI compliant & 256-bit encryption security.</p>
          </div>

          <div className="feature-card">
            <CreditCard size={28} />
            <h4>Free Debit Card</h4>
            <p>No annual fee & unlimited transactions.</p>
          </div>

          <div className="feature-card">
            <Smartphone size={28} />
            <h4>Mobile Banking</h4>
            <p>UPI, IMPS, NEFT & 24/7 digital access.</p>
          </div>

          <div className="feature-card">
            <Users size={28} />
            <h4>Nominee Facility</h4>
            <p>Secure your family’s future easily.</p>
          </div>
        </div>

        {/* DOCUMENT CHECKLIST */}
        <div className="info-card">
          <FileText size={28} />
          <div>
            <h4>Documents Required</h4>
            <ul>
              <li>PAN Card</li>
              <li>Aadhaar Card</li>
              <li>Passport size photo</li>
              <li>Address Proof</li>
            </ul>
          </div>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="success-message">
            🎉 Application submitted successfully! Our executive will contact you.
          </div>
        )}

        {/* FORM */}
        {showForm && (
          <div ref={formRef} className="premium-form-wrapper">
            <h3>Open Your Savings Account</h3>

            <form onSubmit={handleSubmit} className="premium-form">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                onChange={handleChange}
              />
              <input type="date" name="dob" onChange={handleChange} />
              <input
                type="text"
                name="pan"
                placeholder="PAN Number"
                onChange={handleChange}
              />

              <select name="accountType" onChange={handleChange}>
                <option value="Regular">Regular Savings</option>
                <option value="Premium">Premium Savings</option>
                <option value="Senior">Senior Citizen Savings</option>
              </select>

              <input
                type="text"
                name="nominee"
                placeholder="Nominee Name"
                onChange={handleChange}
              />

              <textarea
                name="address"
                placeholder="Full Address"
                onChange={handleChange}
              />

              <button type="submit" className="apply-btn">
                Submit Application
              </button>
            </form>
          </div>
        )}

        {/* FAQ SECTION */}
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-card">
          <HelpCircle size={24} />
          <div>
            <h4>Is there any minimum balance?</h4>
            <p>No, we offer zero balance savings account options.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
