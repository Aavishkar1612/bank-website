import chairmanImg from "../../assets/images/chairman.png";

import "./about.css";

export default function ChairmanMessage() {
  return (
    <div className="about-container">

      <div className="about-banner">
        <h1>Chairman’s Message</h1>
      </div>

      <div className="about-card chairman">

        <img src={chairmanImg} alt="Chairman" />

        <div className="chairman-text">
          <h2 className="about-title">Message from Our Chairman</h2>

          <p>
            AB Fintech is built on the pillars of trust, transparency and
            innovation. Our commitment is to provide reliable banking services
            that empower individuals and businesses.
          </p>

          <p>
            With rapid digital transformation, we continue to invest in
            technology to deliver safe, fast and customer-friendly banking
            experiences.
          </p>
        </div>

      </div>
    </div>
  );
}
