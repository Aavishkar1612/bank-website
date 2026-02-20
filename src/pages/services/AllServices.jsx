import React from "react";
import { Link } from "react-router-dom";
import {
  PiggyBank,
  Building2,
  Landmark,
  GraduationCap,
  Wallet,
  Smartphone,
  CreditCard,
  Globe,
} from "lucide-react";
import "./services.css";

export default function AllServices() {
  const services = [
    {
      title: "Savings Account",
      icon: <PiggyBank size={32} />,
      link: "/services/savings-account",
    },
    {
      title: "Current Account",
      icon: <Building2 size={32} />,
      link: "/services/current-account",
    },
    {
      title: "Fixed Deposit",
      icon: <Landmark size={32} />,
      link: "/services/fixed-deposit",
    },
    {
      title: "Home Loan",
      icon: <Wallet size={32} />,
      link: "/services/home-loan",
    },
    {
      title: "Personal Loan",
      icon: <Wallet size={32} />,
      link: "/services/personal-loan",
    },
    {
      title: "Education Loan",
      icon: <GraduationCap size={32} />,
      link: "/services/education-loan",
    },
    {
      title: "Credit Cards",
      icon: <CreditCard size={32} />,
      link: "/services/credit-card",
    },
    {
      title: "Digital Banking",
      icon: <Smartphone size={32} />,
      link: "/services/digital-banking",
    },
    {
      title: "Internet Banking",
      icon: <Globe size={32} />,
      link: "/services/internet-banking",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Banking Services</h1>
      <p className="services-subtitle">
        Explore our wide range of financial services designed for individuals and businesses.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
