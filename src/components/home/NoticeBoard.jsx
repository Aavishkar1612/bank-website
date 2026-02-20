import "../../styles/home.css";

export default function NoticeBoard() {
  const notices = [
    {
      text: "RBI guidelines updated for KYC verification",
      date: "12 Feb 2026",
    },
    {
      text: "Scheduled maintenance for mobile banking on Sunday",
      date: "10 Feb 2026",
    },
    {
      text: "New fixed deposit interest rates announced",
      date: "08 Feb 2026",
    },
    {
      text: "Net banking upgrade completed successfully",
      date: "05 Feb 2026",
    },
  ];

  return (
    <section className="notice-section">
      <div className="notice-container">
        <h2 className="notice-title">Latest Announcements</h2>

        <div className="notice-list">
          {notices.map((notice, index) => (
            <div className="notice-item" key={index}>
              <div className="notice-text">{notice.text}</div>
              <div className="notice-date">{notice.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
