import "./about.css";

export default function ManagementTeam() {
  return (
    <div className="about-container">

      <div className="about-banner">
        <h1>Management Team</h1>
        <p>Experts ensuring operational excellence.</p>
      </div>

      <div className="board-grid">

        <div className="member-card">
          <h4>Priya Mehta</h4>
          <p>Chief Operations Officer</p>
        </div>

        <div className="member-card">
          <h4>Rahul Patil</h4>
          <p>Head of Digital Banking</p>
        </div>

        <div className="member-card">
          <h4>Smita Desai</h4>
          <p>Customer Experience Lead</p>
        </div>

        <div className="member-card">
          <h4>Vikas Shah</h4>
          <p>Technology Head</p>
        </div>

      </div>

    </div>
  );
}
