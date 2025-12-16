import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function OrderPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart
    .reduce((total, item) => {
      const price = parseFloat(item.price.replace("€", ""));
      return total + price;
    }, 0)
    .toFixed(2);

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems: cart, totalAmount } });
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4">Your Order</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty. <Link to="/browse">Browse stores</Link> to add
          items.
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Store</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name || "Magic Bag"}</td>
                    <td>{item.storeName}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="text-end fw-bold">
                    Total:
                  </td>
                  <td className="fw-bold">€{totalAmount}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
