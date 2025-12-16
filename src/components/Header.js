import "../styles.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch {
      console.error("Failed to log out");
    }
  }

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
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutFoodWaste" className="nav-link">
                  About Food Waste
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {currentUser ? (
                <div className="d-flex align-items-center">
                  <span className="text-light me-3">{currentUser.email}</span>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-light"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-outline-light">
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
