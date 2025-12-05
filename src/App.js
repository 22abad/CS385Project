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
        {/*Navigation to About Us Page*/}
        <Route path="/about" element={<AboutUs />} />
        {/*Navigation to Food Wase info page*/}
        <Route path="/AboutFoodWaste" element={<AboutFoodWaste />} />
      </Routes>
      <div id="Footer" className="container-fluid p-0">
        <Footer />
      </div>
    </>
  );
}
