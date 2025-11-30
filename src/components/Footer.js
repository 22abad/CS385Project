import React from "react";
import "../styles.css";

function Footer() {
  return (
    // Main Footer Container: Dark background, white text
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          {/* Column 1: Brand & Mission Statement */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              EcoBites 🌱
            </h5>
            <p>
              Join us in the fight against food waste. Save money, save food,
              and save the planet—one meal at a time.
            </p>
          </div>

          {/* Column 2: Discovery Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Discover
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Browse Stores
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                How it Works
              </a>
            </p>
          </div>

          {/* Column 3: Company Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Company
            </h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                About Us
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </p>
          </div>

          {/* Column 4: Contact Information */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>📍 Maynooth, Co. Kildare</p>
            <p>✉️ info@ecobites.ie</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Copyright Section */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              © {new Date().getFullYear()} Copyright:{" "}
              <strong className="text-warning">EcoBites Project</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
