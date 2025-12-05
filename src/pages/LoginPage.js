import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Import useAuth hook

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // No longer strictly needed for initial user creation, but good for login/register ops
  const navigate = useNavigate();
  const { login, signup, currentUser } = useAuth(); // Get login and signup from AuthContext

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/order");
    }
  }, [currentUser, navigate]);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("邮箱和密码不能为空。");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      // Redirection is handled by the useEffect based on currentUser
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
    }
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("邮箱和密码不能为空。");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("密码至少需要6个字符。");
      setLoading(false);
      return;
    }

    try {
      await signup(email, password);
      // Redirection is handled by the useEffect based on currentUser
    } catch (err) {
      setError(getFriendlyErrorMessage(err.code));
    }
    setLoading(false);
  };

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
                    disabled={loading}
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
                    disabled={loading}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={handleLogin} disabled={loading}>
                    Login
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleRegister} disabled={loading}>
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