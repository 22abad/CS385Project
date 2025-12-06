import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext"; // Import useCart
import { db } from "../firebase"; // Import db
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions

export default function CheckoutPage() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get location object
  const { currentUser } = useAuth();
  const { clearCart } = useCart(); // Get clearCart from CartContext

  const cartItems = location.state?.cartItems || [];
  const totalAmount = location.state?.totalAmount || "0.00";

  useEffect(() => {
    // Redirect if cart is empty or no user logged in
    if (cartItems.length === 0 || !currentUser) {
      setError("No items in cart or not logged in. Redirecting...");
      setTimeout(() => navigate("/order"), 2000); // Redirect back to order page
    }
  }, [cartItems, currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (cartItems.length === 0 || !currentUser) {
      setError("Cannot place an empty order or without being logged in.");
      setLoading(false);
      return;
    }

    // Basic form validation
    if (!fullName || !address || !creditCard) {
      setError("All form fields are required.");
      setLoading(false);
      return;
    }

    try {
      // Save order to Firestore
      const orderRef = collection(db, "orders");
      await addDoc(orderRef, {
        userId: currentUser.uid,
        userName: currentUser.email, // Or actual name if available
        items: cartItems,
        totalAmount: totalAmount,
        deliveryDetails: {
          fullName,
          address,
        },
        paymentMethod: "Credit Card", // Simplified for now
        timestamp: serverTimestamp(),
        status: "Pending", // Initial status
      });

      setSuccess(true);
      clearCart(); // Clear cart after successful order
      setTimeout(() => {
        navigate("/order-confirmation"); // Navigate to a confirmation page
      }, 2000);
      
    } catch (err) {
      console.error("Order submission error:", err);
      setError("Order submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-success">
          Your order has been placed successfully! Redirecting to confirmation...
        </div>
      </div>
    );
  }

  // Display cart details for user to review before confirming
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Order Summary</h3>
              <ul className="list-group mb-3">
                {cartItems.map((item, index) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {item.name}
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
              <h4>Total: €{totalAmount}</h4>
            </div>
          </div>
          
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Checkout</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="1234 Main St"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="creditCard" className="form-label">Credit Card</label>
                  <input
                    type="text"
                    className="form-control"
                    id="creditCard"
                    value={creditCard}
                    onChange={(e) => setCreditCard(e.target.value)}
                    placeholder="•••• •••• •••• ••••"
                    required
                    disabled={loading}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Processing..." : "Confirm Order"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
