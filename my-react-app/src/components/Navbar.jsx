import React from "react";
import { Link } from "react-router-dom";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Food Donation</h1>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <li>
          <Link to="/admin">Admin</Link> {/* ✅ Correct usage */}
        </li>
        <li>
           <Link to="/donor-dashboard">Donor</Link> {/* Redirects to Donor Dashboard */}
        </li>
        <li>
          <Link to="/agent">Agent</Link> {/* ✅ Correct usage */}
        </li>
        <li>
          <Link to="/signup">Signup</Link> {/* ✅ Correct usage */}
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
