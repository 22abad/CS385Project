import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import AddDataButton from "../components/AddDataButton";

export default function OrderPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const addToCart = (store) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, store];
      // Scroll to the 'Your Order' section after adding to cart
      // Use setTimeout to ensure the DOM has updated before scrolling
      setTimeout(() => {
        const yourOrderSection = document.getElementById('your-order-section');
        if (yourOrderSection) {
          yourOrderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to allow DOM to render
      return newCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace("€", "")), 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    setShowCheckout(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="container mt-5">
      <AddDataButton />
      {submitted && (
        <div className="alert alert-success" role="alert">
          Your order has been placed successfully!
        </div>
      )}
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
              {/* 3. Add onClick handler to the button */}
              <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4. Conditionally render the checkout form */}
      {showCheckout && (
        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
              </div>
              <div className="mb-3">
                <label htmlFor="creditCard" className="form-label">Credit Card</label>
                <input type="text" className="form-control" id="creditCard" placeholder="•••• •••• •••• ••••" />
              </div>
              <button type="submit" className="btn btn-primary">Confirm Order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
