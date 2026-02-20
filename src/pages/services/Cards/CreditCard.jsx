import { useState } from "react";
import {
  CreditCard as CardIcon,
  Gift,
  ShieldCheck,
  Zap,
  Percent,
  HelpCircle,
  Star,
} from "lucide-react";
import "../services.css";

export default function CreditCard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="premium-page">
      <section className="container premium-section">

        {/* HERO SECTION */}
        <div className="loan-hero credit-hero">
          <div>
            <h2>Premium Credit Card Experience</h2>
            <p>
              Enjoy cashback, reward points, exclusive travel benefits and
              secure contactless payments with AB Fintech Credit Cards.
            </p>
            <button className="apply-btn" onClick={() => setShowForm(true)}>
              Apply Now
            </button>
          </div>

          {/* CARD MOCKUP */}
          <div className="credit-card-mock">
            <CardIcon size={40} />
            <h3>AB Fintech Platinum</h3>
            <p>**** **** **** 4589</p>
          </div>
        </div>

        {/* REWARD HIGHLIGHT */}
        <div className="emi-card">
          <Gift size={32} />
          <div>
            <h4>Earn 5X Reward Points</h4>
            <p>
              Get accelerated rewards on shopping, dining & travel bookings.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <h3 className="section-title">Card Features</h3>
        <div className="card-grid">
          <div className="feature-card">
            <Star size={28} />
            <h4>Reward Points</h4>
            <p>Earn points on every transaction.</p>
          </div>

          <div className="feature-card">
            <Percent size={28} />
            <h4>EMI Conversion</h4>
            <p>Convert big purchases into easy EMIs.</p>
          </div>

          <div className="feature-card">
            <Zap size={28} />
            <h4>Contactless Payments</h4>
            <p>Tap & pay securely anywhere.</p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={28} />
            <h4>Fraud Protection</h4>
            <p>Advanced security with real-time alerts.</p>
          </div>
        </div>

        {/* CARD VARIANTS */}
        <h3 className="section-title">Choose Your Card</h3>
        <div className="card-grid">
          <div className="variant-card silver">
            <h4>Silver Card</h4>
            <p>Basic rewards & zero joining fee.</p>
          </div>

          <div className="variant-card gold">
            <h4>Gold Card</h4>
            <p>Higher limits & airport lounge access.</p>
          </div>

          <div className="variant-card platinum">
            <h4>Platinum Card</h4>
            <p>Premium lifestyle & travel privileges.</p>
          </div>
        </div>

        {/* APPLICATION FORM */}
        {showForm && (
          <div className="premium-form-wrapper">
            <h3>Credit Card Application</h3>
            <form className="premium-form">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Mobile Number" />
              <input type="number" placeholder="Monthly Income (₹)" />
              <select>
                <option>Employment Type</option>
                <option>Salaried</option>
                <option>Self-Employed</option>
              </select>
              <textarea placeholder="Address" />
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
            <h4>How do reward points work?</h4>
            <p>
              You earn points on every eligible transaction which can be
              redeemed for vouchers, travel bookings or statement credit.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
