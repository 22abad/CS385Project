import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import AddDataButton from "../components/AddDataButton";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function OrderPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stores"));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Fisher-Yates shuffle algorithm
        for (let i = productsData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [productsData[i], productsData[j]] = [productsData[j], productsData[i]];
        }

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("€", "")), 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    navigate("/checkout", { state: { cartItems: cart, totalAmount: calculateTotal() } });
  };

  return (
    <div className="container mt-5">
      <AddDataButton />
      <div className="row">
        <div className="col-md-8">
          <h2>Order Menu</h2>
          <div className="row">
            {products.map((store) => (
              <div className="col-md-6 mb-4" key={store.id}>
                <div className="card">
                  <img src={store.image} className="card-img-top" alt={store.name} />
                  <div className="card-body">
                    <h5 className="card-title">{store.name}</h5>
                    <p className="card-text">{store.category}</p>
                    <p className="card-text">
                      <strong>{store.price}</strong>{" "}
                      <span className="text-muted"><s>{store.originalPrice}</s></span>
                    </p>
                    {store.itemsLeft > 0 ? (
                      <button className="btn btn-primary" onClick={() => addToCart(store)}>
                        Add to Cart
                      </button>
                    ) : (
                      <button className="btn btn-secondary" disabled>
                        Sold Out
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2 id="your-order-section">Your Order</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {item.name}
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <h4>Total: €{calculateTotal()}</h4>
              <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
