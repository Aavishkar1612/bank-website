import { Routes, Route } from "react-router-dom";

// MAIN PAGES
import Home from "../pages/Home";
import AboutUs from "../pages/about/AboutUs";
import AllServices from "../pages/services/AllServices";

// ABOUT PAGES
import VisionMission from "../pages/about/VisionMission";
import ChairmanMessage from "../pages/about/ChairmanMessage";
import BoardOfDirectors from "../pages/about/BoardOfDirectors";
import ManagementTeam from "../pages/about/ManagementTeam";
import AnnualReports from "../pages/about/AnnualReports";

// SERVICE PAGES
import SavingsAccount from "../pages/services/Deposits/SavingsAccount";
import CurrentAccount from "../pages/services/Deposits/CurrentAccount";
import FixedDeposit from "../pages/services/Deposits/FixedDeposit";

import HomeLoan from "../pages/services/Loans/HomeLoan";
import PersonalLoan from "../pages/services/Loans/PersonalLoan";
import EducationLoan from "../pages/services/Loans/EducationLoan";

import CreditCard from "../pages/services/Cards/CreditCard";

import DigitalServices from "../pages/services/DigitalServices";
import InternetBanking from "../pages/services/Digital/InternetBanking";

// NEW PAGES
import Customer from "../pages/Customer";
import Branches from "../pages/Branches";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* ABOUT */}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/about/vision-mission" element={<VisionMission />} />
      <Route path="/about/chairman-message" element={<ChairmanMessage />} />
      <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
      <Route path="/about/management-team" element={<ManagementTeam />} />
      <Route path="/about/annual-reports" element={<AnnualReports />} />

      {/* SERVICES */}
      <Route path="/services" element={<AllServices />} />

      <Route path="/services/savings-account" element={<SavingsAccount />} />
      <Route path="/services/current-account" element={<CurrentAccount />} />
      <Route path="/services/fixed-deposit" element={<FixedDeposit />} />

      <Route path="/services/home-loan" element={<HomeLoan />} />
      <Route path="/services/personal-loan" element={<PersonalLoan />} />
      <Route path="/services/education-loan" element={<EducationLoan />} />

      <Route path="/services/credit-card" element={<CreditCard />} />

      <Route path="/services/digital-banking" element={<DigitalServices />} />
      <Route path="/services/internet-banking" element={<InternetBanking />} />

      {/* CUSTOMER / BRANCH / CONTACT */}
      <Route path="/customer" element={<Customer />} />
      <Route path="/branches" element={<Branches />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}