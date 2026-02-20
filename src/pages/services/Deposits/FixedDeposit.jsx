import React, { useState } from "react";
import "../services.css";

export default function FixedDeposit() {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("1");
  const [senior, setSenior] = useState(false);
  const [maturity, setMaturity] = useState(null);

  const baseRate = 6.5; // Base interest rate
  const seniorExtra = 0.5; // Extra for senior citizens

  const calculateFD = () => {
    const rate = senior ? baseRate + seniorExtra : baseRate;
    const P = parseFloat(amount);
    const T = parseFloat(tenure);

    if (!P || P <= 0) return;

    // Compound interest formula (Quarterly Compounded)
    const maturityAmount =
      P * Math.pow(1 + rate / 400, 4 * T);

    setMaturity(maturityAmount.toFixed(2));
  };

  return (
    <div className="service-page">

      {/* HEADER */}
      <section className="service-section">
        <h1>Fixed Deposit</h1>
        <p>
          Grow your savings securely with guaranteed returns, competitive
          interest rates, and flexible tenure options.
        </p>
      </section>

      {/* FEATURES */}
      <section className="service-section light">
        <h2>Why Choose Our Fixed Deposit?</h2>
        <ul className="benefits-list">
          <li>✔ High interest returns up to 7%*</li>
          <li>✔ Flexible tenure from 6 months to 10 years</li>
          <li>✔ Loan against FD up to 90% value</li>
          <li>✔ Auto renewal facility available</li>
          <li>✔ Extra 0.5% for Senior Citizens</li>
          <li>✔ Safe & RBI-compliant investment</li>
        </ul>
      </section>

      {/* FD CALCULATOR */}
      <section className="service-section">
        <h2>FD Calculator</h2>

        <div className="account-form">
          <div className="form-group">
            <label>Investment Amount (₹)</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Select Tenure (Years)</label>
            <select
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            >
              <option value="1">1 Year</option>
              <option value="3">3 Years</option>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={senior}
                onChange={() => setSenior(!senior)}
              />
              Senior Citizen (Extra 0.5%)
            </label>
          </div>

          <button className="primary-btn" onClick={calculateFD}>
            Calculate Maturity
          </button>
        </div>

        {maturity && (
          <div className="info-box" style={{ marginTop: "20px" }}>
            <strong>Maturity Amount:</strong> ₹{maturity}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="service-bottom-cta">
        <h2>Secure Your Future Today</h2>
        <p>
          Start your Fixed Deposit now and enjoy stable, risk-free returns.
        </p>
        <button className="primary-btn large">
          Open Fixed Deposit
        </button>
      </section>
    </div>
  );
}
