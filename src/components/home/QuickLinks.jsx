import "../../styles/home.css";
import { Landmark, CreditCard, Banknote, Smartphone } from "lucide-react";

export default function QuickLinks() {
  const links = [
    {
      icon: <Landmark size={28} />,
      title: "Open Account",
      desc: "Start your savings journey with AB Fintech.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Apply Loan",
      desc: "Quick and easy personal & business loans.",
    },
    {
      icon: <Banknote size={28} />,
      title: "Interest Rates",
      desc: "Check latest FD, RD & loan interest rates.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Digital Banking",
      desc: "Access mobile & internet banking services.",
    },
  ];

  return (
    <section className="quick-links">
      <div className="container">
        <h2 className="quick-title">Quick Access</h2>

        <div className="quick-grid">
          {links.map((item, index) => (
            <div className="quick-card" key={index}>
              <div className="quick-icon">{item.icon}</div>
              <div className="quick-heading">{item.title}</div>
              <p className="quick-desc">{item.desc}</p>
              <button className="quick-btn">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
