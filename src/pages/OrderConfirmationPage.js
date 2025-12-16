import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmationPage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="text-success mb-4">Order Confirmed!</h2>
          <p className="lead">Thank you for your purchase. Your order has been placed successfully.</p>
          <p>You will receive an email confirmation shortly.</p>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary me-2">Continue Shopping</Link>
            <Link to="/order-history" className="btn btn-secondary">View Order History</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;