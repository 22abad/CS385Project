import "./styles.css";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div id="Header">
          <Header />
        </div>
      </Router>
      <div id="Main" className="container-fluid">
        <MainContent />
      </div>
      <div id="Footer" className="container-fluid p-0">
        <Footer />
      </div>
    </>
  );
}
