import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LogoutButton() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Failed to log out:", error);
      alert("Failed to log out.");
    }
  };

  return currentUser ? (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  ) : null;
}
