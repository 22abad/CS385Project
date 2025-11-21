// src/MainContent.js
import React from "react";
import groceryBag from "./content/GroceryBag.png";
import Browse from "./Browse"; // Import the new Browse component
import "./styles.css";

function MainContent() {
  return (
    <>
      <div className="main container-fluid">
        
        {/* 1. Hero / Intro Section */}
        <div className="text-center">
            <h1 id="MainHeader">Prevent Food Waste Today!</h1>
            <p className="lead text-muted">
                Did you know? 1/3 of all food produced is wasted. Join us to rescue tasty food.
            </p>
            <img
            src={groceryBag}
            className="mx-auto d-block img-fluid"
            alt="Grocery Bag"
            style={{ maxWidth: "300px", marginBottom: "30px" }} 
            />
        </div>

        {/* 2. How it Works Section */}
        <div className="container my-5">
            <h1 id="WhyUseHeader" className="mb-4">How it works</h1>
            <div className="row text-center">
                <div className="col-md-4">
                    <h3>1. Find</h3>
                    <p>Browse stores near you and find a Magic Bag.</p>
                </div>
                <div className="col-md-4">
                    <h3>2. Reserve</h3>
                    <p>Pay in the app and get your pickup time.</p>
                </div>
                <div className="col-md-4">
                    <h3>3. Enjoy</h3>
                    <p>Pick up your food and enjoy knowing you helped the planet.</p>
                </div>
            </div>
        </div>

        {/* 3. Browse/List Section */}
        <hr className="my-5"/>
        <Browse /> 
      </div>
    </>
  );
}

export default MainContent;