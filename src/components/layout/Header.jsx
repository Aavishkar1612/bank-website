import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="container header-flex">
        
        {/* Logo */}
        <div className="logo">
          <h1>AB Fintech</h1>
          <p>Smart Banking. Digital Future.</p>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About
          </NavLink>

          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>

          <NavLink to="/customer" className="nav-link">
            Customer
          </NavLink>

          <NavLink to="/branches" className="nav-link">
            Branches
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
