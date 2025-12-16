import "./styles.css";
import React from "react";
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Footer from "./components/Footer";
import BrowsePage from "./pages/BrowsePage";
import OrderPage from "./pages/OrderPage";
import AboutUs from "./pages/AboutUs";
import AboutFoodWaste from "./pages/AboutFoodWaste";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div id="Header">
        <Header />
      </div>
      <Routes>
        {/*Navigation to homepage*/}
        <Route path="/" element={<MainContent />} />
        {/*Navigation to Browse/Shopping Page*/}
        <Route path="/browse" element={<BrowsePage />} />
        {/*Navigation to order screen*/}
        <Route path="/order" element={<OrderPage />} />
        {/*Navigation to About Us Page*/}
        <Route path="/about" element={<AboutUs />} />
        {/*Navigation to Food Wase info page*/}
        <Route path="/AboutFoodWaste" element={<AboutFoodWaste />} />

        {/* Checkout and Order Management */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route
          path="/order-history"
          element={
            <PrivateRoute>
              <OrderHistoryPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <div id="Footer" className="container-fluid p-0">
        <Footer />
      </div>
    </>
  );
}
