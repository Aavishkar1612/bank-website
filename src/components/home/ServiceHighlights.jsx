import "../../styles/home.css";
import { Landmark, PiggyBank, Smartphone, ShieldCheck } from "lucide-react";

export default function ServiceHighlights() {
  const services = [
    {
      icon: <PiggyBank size={34} />,
      title: "Savings Accounts",
      desc: "Secure and flexible savings accounts with competitive interest rates.",
    },
    {
      icon: <Landmark size={34} />,
      title: "Loans",
      desc: "Home, personal, education, and business loans with easy approval.",
    },
    {
      icon: <Smartphone size={34} />,
      title: "Digital Banking",
      desc: "Manage your finances anytime with mobile & internet banking.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Secure Payments",
      desc: "Advanced encryption ensures safe and reliable transactions.",
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Banking Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-title">{service.title}</div>
            <div className="service-desc">{service.desc}</div>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
