import "../styles.css";
import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"; // Import LogoutButton
import { useAuth } from "../contexts/AuthContext"; // Import useAuth

function Header() {
  const { currentUser } = useAuth(); // Get current user from context

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EcoBites 🌱
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/browse" className="nav-link">
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/order" className="nav-link">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutUs" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutFoodWaste" className="nav-link">
                  About Food Waste
                </Link>
              </li>
              {currentUser && ( // Conditionally render LogoutButton
                <li className="nav-item">
                  <LogoutButton />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
