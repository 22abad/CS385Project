import "./styles.css";
import React from "react";

import BrowsePage from "./BrowsePage";

import OrderPage from "./OrderPage";

import AboutUs from "./AboutUs";

import AboutFoodWaste from "./AboutFoodWaste";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            {/* Navigation WIP
            <Routes className="navbar-nav me-auto mb-2 mb-lg-0">
              <Route
                path="/browse"
                element={<BrowsePage />}
                className="nav-item"
              >
                Browse
              </Route>
              <Route
                path="/browse"
                element={<OrderPage />}
                className="nav-item"
              >
                Order
              </Route>
              <Route path="/browse" element={<AboutUs />} className="nav-item">
                About Us
              </Route>
              <Route
                path="/browse"
                element={<AboutFoodWaste />}
                className="nav-item"
              >
                About Food Waste
              </Route>
  </Routes> */}

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Browse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Food Waste
                </a>
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
