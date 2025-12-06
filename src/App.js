import "./styles.css";
import React from "react";
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Footer from "./components/Footer";
import BrowsePage from "./pages/BrowsePage";
import OrderPage from "./pages/OrderPage";
import AboutUs from "./pages/AboutUs";
import AboutFoodWaste from "./pages/AboutFoodWaste";
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import ContactPage from "./pages/ContactPage"; // Import ContactPage
import HowItWorksPage from "./pages/HowItWorksPage"; // Import HowItWorksPage
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import CheckoutPage from "./pages/CheckoutPage"; // Import CheckoutPage
import OrderConfirmationPage from "./pages/OrderConfirmationPage"; // Import OrderConfirmationPage
import OrderHistoryPage from "./pages/OrderHistoryPage"; // Import OrderHistoryPage

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Render ScrollToTop component */}
      <div id="Header">
        <Header />
      </div>
      <Routes>
        {/*Navigation to homepage*/}
        <Route path="/" element={<MainContent />} />
        {/*Navigation to Browse/Shopping Page*/}
        <Route path="/browse" element={<BrowsePage />} />
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        {/*Navigation to order screen - Protected */}
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          }
        />
        {/*Navigation to Checkout Page - Protected */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        {/*Navigation to Order History Page - Protected */}
        <Route
          path="/order-history"
          element={
            <PrivateRoute>
              <OrderHistoryPage />
            </PrivateRoute>
          }
        />
        {/*Navigation to About Us Page*/}
        <Route path="/about" element={<AboutUs />} />
        {/*Navigation to Food Wase info page*/}
        <Route path="/AboutFoodWaste" element={<AboutFoodWaste />} />
        {/*Navigation to Contact Page*/}
        <Route path="/contact" element={<ContactPage />} />
        {/*Navigation to How It Works Page*/}
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        {/*Navigation to Order Confirmation Page*/}
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
      </Routes>
      <div id="Footer" className="container-fluid p-0">
        <Footer />
      </div>
    </>
  );
}
