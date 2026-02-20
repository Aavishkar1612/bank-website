import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="topbar">

      <div className="container topbar-flex">

        {/* LEFT INFO */}
        <div className="topbar-left">
          <span>Welcome to AB Fintech</span>
          <span className="divider">|</span>
          <span>Customer Care: 1800-120-2026</span>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="topbar-right">
          <Link to="/internet-banking">Internet Banking</Link>
          <Link to="/mobile-banking">Mobile Banking</Link>
          <Link to="/branches">Branch Locator</Link>
          <Link to="/contact" className="login-btn">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}
