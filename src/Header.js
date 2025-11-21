import "./styles.css";
import React from "react";

import backgroundImage from "./content/LeafBackground.png";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">
          (Insert Website Name Here)
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Browse
            </a>
            <a class="nav-item nav-link" href="#">
              Order
            </a>
            <a class="nav-item nav-link" href="#">
              About Us
            </a>
          </div>
        </div>
      </nav>
      <div class="bg">
        <h1 class="text-white" id="title">
          {" "}
          (Insert Website Name Here)
        </h1>
        <hr class="white-hr" />

        <div class="container-fluid">
          <ul class="nav justify-content-center ">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Browse
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
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
