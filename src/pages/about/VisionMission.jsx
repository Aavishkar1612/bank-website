import "./about.css";

export default function VisionMission() {
  return (
    <div className="about-container">

      <div className="about-banner">
        <h1>Vision & Mission</h1>
        <p>Our purpose and direction for the future of banking.</p>
      </div>

      <div className="vm-grid">
        <div className="vm-box">
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted and customer-centric digital bank
            delivering seamless financial solutions powered by innovation.
          </p>
        </div>

        <div className="vm-box">
          <h3>Our Mission</h3>
          <p>
            To provide secure, fast and accessible banking services while
            building long-term relationships with our customers.
          </p>
        </div>
      </div>

    </div>
  );
}
