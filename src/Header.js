// src/Header.js
import "./styles.css";
import React from "react";

// Note: backgroundImage is handled in CSS via the .bg class
// import backgroundImage from "./content/LeafBackground.png"; 

function Header() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
          EcoBites 🌱
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Browse
            </a>
            <a className="nav-item nav-link" href="#">
              Order
            </a>
            <a className="nav-item nav-link" href="#">
              About Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero / Background Section */}
      <div className="bg">
        <h1 className="text-white" id="title">
          EcoBites
        </h1>
        <hr className="white-hr" />

        {/* Sub-navigation inside Hero */}
        <div className="container-fluid">
          <ul className="nav justify-content-center ">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Browse
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About Food Waste
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;