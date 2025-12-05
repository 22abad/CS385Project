import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddDataButton = () => {
  const sampleNames = ["Green Grocer", "Corner Store", "The Food Market", "Daily Deli", "City Eats", "Farm Fresh"];
  const sampleCategories = ["Groceries", "Baked Goods", "Meals", "Dairy", "Produce"];
  const foodImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  ];

  const generateRandomProduct = () => {
    const name = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const category = sampleCategories[Math.floor(Math.random() * sampleCategories.length)];
    const price = (Math.random() * 8 + 2).toFixed(2);
    const originalPrice = (price * (Math.random() * 1.5 + 1.5)).toFixed(2);
    
    return {
      name: `${name} #${Math.floor(Math.random() * 100)}`,
      category: category,
      price: `€${price}`,
      originalPrice: `€${originalPrice}`,
      itemsLeft: Math.floor(Math.random() * 11),
      distance: `${(Math.random() * 5).toFixed(1)} km`,
      image: foodImages[Math.floor(Math.random() * foodImages.length)],
    };
  };

  const handleAddData = async () => {
    console.log("Adding 10 random products to Firestore...");
    try {
      const storesCollection = collection(db, "stores");
      for (let i = 0; i < 10; i++) {
        const newProduct = generateRandomProduct();
        await addDoc(storesCollection, newProduct);
      }
      alert("Successfully added 10 random products to your Firestore database!");
    } catch (error) {
      console.error("Error adding documents: ", error);
      alert("Error adding products. Check the console for details.");
    }
  };

  return (
    <button className="btn btn-secondary m-3" onClick={handleAddData}>
      Add 10 Random Products to DB
    </button>
  );
};

export default AddDataButton;
