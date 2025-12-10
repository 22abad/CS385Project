import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const AddDataButton = () => {
  const sampleNames = ["Green Grocer", "Corner Store", "The Food Market", "Daily Deli", "City Eats", "Farm Fresh"];
  const sampleCategories = ["Groceries", "Baked Goods", "Meals", "Dairy", "Produce"];
  const foodImagesPool = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  ];

  const [shuffledImages, setShuffledImages] = useState([]);
  const imageIndex = useRef(0);

  useEffect(() => {
    shuffleImages();
  }, []);

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const shuffleImages = () => {
    setShuffledImages(shuffleArray(foodImagesPool));
    imageIndex.current = 0;
  };

  const getNextImage = () => {
    if (imageIndex.current >= shuffledImages.length) {
      shuffleImages();
    }
    const image = shuffledImages[imageIndex.current];
    imageIndex.current += 1;
    return image;
  };

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
      image: getNextImage(),
    };
  };

  const handleAddData = async () => {
    console.log("Adding 5 random products to Firestore...");
    try {
      const storesCollection = collection(db, "stores");
      const addPromises = [];
      for (let i = 0; i < 5; i++) {
        const newProduct = generateRandomProduct();
        addPromises.push(addDoc(storesCollection, newProduct));
      }
      await Promise.all(addPromises);
      alert("Successfully added 5 random products to your Firestore database!");
    } catch (error) {
      console.error("Error adding documents: ", error);
      alert("Error adding products. Check the console for details.");
    }
  };

  const handleDeleteAllData = async () => {
    if (!window.confirm("Are you sure you want to delete ALL products from Firestore? This action cannot be undone.")) {
      return;
    }
    console.log("Deleting all products from Firestore...");
    try {
      const querySnapshot = await getDocs(collection(db, "stores"));
      const deletePromises = querySnapshot.docs.map(d => deleteDoc(doc(db, "stores", d.id)));
      await Promise.all(deletePromises);
      alert("Successfully deleted all products from your Firestore database!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting documents: ", error);
      alert("Error deleting products. Check the console for details.");
    }
  };

  return (
    <div>
      <button className="btn btn-secondary m-3" onClick={handleAddData}>
        Add 5 Random Products to DB
      </button>
      <button className="btn btn-danger m-3" onClick={handleDeleteAllData}>
        Delete All Products
      </button>
    </div>
  );
};

export default AddDataButton;