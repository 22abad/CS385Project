import "./styles.css";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <div id="Header">
        <Header />
      </div>
      <div id="Main" className="container-fluid">
        <MainContent />
      </div>
      <div id="Footer" className="container-fluid p-0">
        <Footer />
      </div>
    </>
  );
}
