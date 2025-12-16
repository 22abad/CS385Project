// src/Browse.js
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import "./styles.css";
import { useCart } from "./contexts/CartContext";
import { useNavigate } from "react-router-dom";

function Browse() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleReserve = (store) => {
    addToCart({
      id: store.id,
      name: "Magic Bag", // Assuming each store sells a generic "Magic Bag"
      storeName: store.name,
      price: store.price,
      image: store.image,
    });
    alert("Added to cart!");
    // Optional: navigate to order page
    // navigate("/order");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Save a Magic Bag nearby</h2>

      <div className="row">
        {/* Map through the stores data to create cards dynamically */}
        {products.map((store) => (
          <div key={store.id} className="col-md-4 col-sm-6 mb-4">
            {/* Card container with conditional class for sold-out items */}
            <div
              className={`card h-100 store-card ${
                store.itemsLeft === 0 ? "sold-out" : ""
              }`}
            >
              {/* Image Section */}
              <div className="image-container">
                <img
                  src={store.image}
                  className="card-img-top"
                  alt={store.name}
                />
                {/* Show Overlay if sold out */}
                {store.itemsLeft === 0 && (
                  <div className="overlay">SOLD OUT</div>
                )}
              </div>

              {/* Body Section */}
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{store.name}</h5>
                  <span className="badge bg-success">{store.distance}</span>
                </div>
                <p className="card-text text-muted">{store.category}</p>

                {/* Price and Items Left Section */}
                <div className="d-flex justify-content-between align-items-end mt-3">
                  <div>
                    <span className="text-decoration-line-through text-muted me-2">
                      {store.originalPrice}
                    </span>
                    <span className="fw-bold text-primary fs-5">
                      {store.price}
                    </span>
                  </div>
                  {/* Conditional styling: Red text if low stock */}
                  <small
                    className={`fw-bold ${
                      store.itemsLeft < 3 ? "text-danger" : "text-success"
                    }`}
                  >
                    {store.itemsLeft} left
                  </small>
                </div>

                {/* Action Button */}
                <button
                  className="btn btn-outline-success w-100 mt-3"
                  disabled={store.itemsLeft === 0}
                  onClick={() => handleReserve(store)}
                >
                  {store.itemsLeft === 0
                    ? "Check back tomorrow"
                    : "Reserve Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
