import "./about.css";

export default function BoardOfDirectors() {
  return (
    <div className="about-container">

      <div className="about-banner">
        <h1>Board of Directors</h1>
        <p>Leadership driving strategy and governance.</p>
      </div>

      <div className="board-grid">

        <div className="member-card">
          <h4>Aavishkar Bhosale</h4>
          <p>Chairman</p>
        </div>

        <div className="member-card">
          <h4>Virat Kohli</h4>
          <p>Managing Director</p>
        </div>

        <div className="member-card">
          <h4>Rohit Sharma</h4>
          <p>Independent Director</p>
        </div>

        <div className="member-card">
          <h4>Hardik Pandya</h4>
          <p>Finance Director</p>
        </div>

      </div>

    </div>
  );
}
