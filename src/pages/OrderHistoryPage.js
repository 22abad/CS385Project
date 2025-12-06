import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs, deleteDoc, doc, orderBy } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function OrderHistoryPage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ordersRef = collection(db, "orders");
      const q = query(ordersRef, where("userId", "==", currentUser.uid), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedOrders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString(), // Convert Firestore Timestamp to readable date
      }));
      setOrders(fetchedOrders);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to fetch order history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [currentUser]); // Refetch when currentUser changes

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      return;
    }
    try {
      await deleteDoc(doc(db, "orders", orderId));
      setOrders(orders.filter(order => order.id !== orderId)); // Update UI
      alert("Order deleted successfully!");
    } catch (err) {
      console.error("Error deleting order:", err);
      setError("Failed to delete order.");
    }
  };

  const handleClearAllOrders = async () => {
    if (!window.confirm("Are you sure you want to clear ALL your order history? This action cannot be undone.")) {
      return;
    }
    setLoading(true);
    setError("");
    try {
      const ordersRef = collection(db, "orders");
      const q = query(ordersRef, where("userId", "==", currentUser.uid));
      const querySnapshot = await getDocs(q);
      const deletePromises = querySnapshot.docs.map(d => deleteDoc(doc(db, "orders", d.id)));
      await Promise.all(deletePromises);
      setOrders([]); // Clear UI
      alert("All order history cleared successfully!");
    } catch (err) {
      console.error("Error clearing all orders:", err);
      setError("Failed to clear all orders.");
    } finally {
      setLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning">Please log in to view your order history.</div>
        <button className="btn btn-primary" onClick={() => navigate("/login")}>Go to Login</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Order History</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      {orders.length === 0 ? (
        <div className="text-center">
          <p>You have no past orders.</p>
          <button className="btn btn-primary" onClick={() => navigate("/order")}>Start Ordering</button>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-danger" onClick={handleClearAllOrders}>Clear All History</button>
          </div>
          {orders.map((order) => (
            <div key={order.id} className="card mb-3">
              <div className="card-header d-flex justify-content-between align-items-center">
                Order ID: {order.id}
                <small className="text-muted">{order.timestamp}</small>
              </div>
              <div className="card-body">
                <h5 className="card-title">Total: €{order.totalAmount}</h5>
                <p className="card-text">Status: <strong>{order.status}</strong></p>
                <p className="card-text">Delivery To: {order.deliveryDetails.fullName}, {order.deliveryDetails.address}</p>
                <h6>Items:</h6>
                <ul className="list-group list-group-flush mb-3">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="list-group-item">
                      {item.name} - {item.price}
                    </li>
                  ))}
                </ul>
                <button 
                  className="btn btn-sm btn-outline-danger" 
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete Order
                </button>
                {/* No 'Modify Order' implemented for now, as it's more complex */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
