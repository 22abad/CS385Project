import "./styles.css";
import React from "react";

import BrowsePage from "./BrowsePage";

import OrderPage from "./OrderPage";

import AboutUs from "./AboutUs";

import AboutFoodWaste from "./AboutFoodWaste";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            EcoBites 🌱
          </a>
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
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div style={{ marginTop: "80px" }}></div>
    </>
  );
}

export default Header;
