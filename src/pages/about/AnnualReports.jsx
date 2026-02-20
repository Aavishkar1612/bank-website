import "./about.css";

export default function AnnualReports() {
  return (
    <div className="about-container">

      <div className="about-banner">
        <h1>Annual Reports</h1>
        <p>Financial transparency and performance highlights.</p>
      </div>

      <div className="about-card">

        <div className="board-grid">

          <div className="member-card">
            <h4>2024 Report</h4>
            <p>Financial performance and growth insights.</p>
            <button className="primary-btn">Download</button>
          </div>

          <div className="member-card">
            <h4>2023 Report</h4>
            <p>Annual operations and banking highlights.</p>
            <button className="primary-btn">Download</button>
          </div>

          <div className="member-card">
            <h4>2022 Report</h4>
            <p>Customer expansion and service updates.</p>
            <button className="primary-btn">Download</button>
          </div>

        </div>

      </div>

    </div>
  );
}
