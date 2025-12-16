import React from "react";
import Browse from "../Browse";
import AddDataButton from "../components/AddDataButton";

export default function BrowsePage() {
  return (
    <div className="container mt-5 pt-5">
      <AddDataButton />
      <Browse />
    </div>
  );
}
