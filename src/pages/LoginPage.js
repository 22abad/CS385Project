import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase"; // Import auth functions
import { onAuthStateChanged } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state for initial user check
  const navigate = useNavigate();

  const getFriendlyErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "邮箱地址格式不正确。";
      case "auth/user-disabled":
        return "此用户已被禁用。";
      case "auth/user-not-found":
        return "未找到此邮箱对应的用户。";
      case "auth/wrong-password":
        return "密码错误。";
      case "auth/email-already-in-use":
        return "该邮箱已被注册。";
      case "auth/weak-password":
        return "密码至少需要6个字符。";
      case "auth/operation-not-allowed":
        return "邮箱/密码登录未启用。请联系管理员。";
      default:
        return "发生未知错误，请重试。";
    }
  };

  // Temporary function to create default users if they don't exist
  useEffect(() => {
    const createDefaultUsers = async () => {
      const usersToCreate = [
        { email: "admin@example.com", password: "admin" },
        { email: "guest1@example.com", password: "guest1" },
        { email: "guest2@example.com", password: "guest2" },
      ];

      for (const user of usersToCreate) {
        // Try to register the user. If they already exist, Firebase will throw an error 'auth/email-already-in-use'.
        try {
          await createUserWithEmailAndPassword(auth, user.email, user.password);
          console.log(`User ${user.email} created successfully.`);
        } catch (createError) {
          if (createError.code === 'auth/email-already-in-use') {
            console.log(`User ${user.email} already exists.`);
          } else {
            console.error(`Error creating user ${user.email}:`, createError.message);
          }
        }
      }
      setLoading(false); // Set loading to false after default users check
    };
    createDefaultUsers();
  }, []); // Run once on component mount

  // Listen for auth state changes to redirect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/order"); // Redirect to the order page after login
      }
      // Only set loading to false here if the default user creation is not handling it
      // For now, let's keep it handled by createDefaultUsers for initial setup
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("邮箱和密码不能为空。");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirection handled by onAuthStateChanged effect
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("邮箱和密码不能为空。");
      return;
    }
    if (password.length < 6) {
      setError("密码至少需要6个字符。");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirection handled by onAuthStateChanged effect
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
    }
  };

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
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login / Register</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                    Login
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleRegister}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
