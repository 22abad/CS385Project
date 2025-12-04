import React from "react";
import groceryBag from "../content/GroceryBag.png";
import Browse from "../Browse"; // Import the Browse component
import "../styles.css";

import { Routes, Route } from "react-router-dom";

function MainContent() {
  return (
    <>
      <div className="main container-fluid">
        {/* --- Intro Section (Teammate's Design) --- */}
        <h1 id="MainHeader">Prevent Food Waste Today!</h1>

        <div className="row top-circles">
          <div className="col-6 block">
            <div className="circle">
              <p className="Grocery-Text">Get Food for 1/2 Price!</p>
            </div>
          </div>
          <div className="col-6 block">
            <div className="circle">
              <p className="Grocery-Text">Reduce Food Waste!</p>
            </div>
          </div>
        </div>

        <div className="row bagImage">
          <div className="col-12">
            <img
              src={groceryBag}
              className="mx-auto d-block img-fluid center-image"
              alt="Grocery Bag"
              id="GroceryImage"
            />
          </div>
        </div>

        <div className="row bottom-circles">
          <div className="col-6 block">
            <div className="circle">
              <p className="Grocery-Text">Try Food From New Places!</p>
            </div>
          </div>
          <div className="col-6 block">
            <div className="circle">
              <p className="Grocery-Text">Reduce Carbon Emissions!</p>
            </div>
          </div>
        </div>

        <div className="row bottom-circle">
          <div className="col-12 block">
            <div className="circle">
              <p className="Grocery-Text">Discover New Foods!</p>
            </div>
          </div>
        </div>
        {/* --- End of Intro Section --- */}

        {/* --- Browse Section (Store List) --- */}
        <hr className="my-5" />
        <Browse />
      </div>
    </>
  );
}

export default MainContent;
