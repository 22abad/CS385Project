import React from "react";
import groceryBag from "./content/GroceryBag.png";
import "./styles.css";

function MainContent() {
  return (
    <>
      <div class="main container-fluid">
        <h1 id="MainHeader">Prevent Food Waste Today!</h1>
        <img
          src={groceryBag}
          class="mx-auto d-block img-fluid"
          alt="Grocery Bag"
        />

        <h1 id="WhyUseHeader"> Why Use ____ ?</h1>
      </div>
    </>
  );
}

export default MainContent;
