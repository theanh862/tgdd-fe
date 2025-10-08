import React, { useState } from "react";
import { login } from "@/services/api";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (err) {
      console.error("Login error:", err);
      setError("Đăng nhập thất bại. Kiểm tra email hoặc mật khẩu!");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4 text-center">Đăng nhập</h3>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mật khẩu</label>
        <input
          type="password"
          className="form-control"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="btn btn-warning w-100 fw-semibold"
        onClick={handleLogin}
      >
        Đăng nhập
      </button>
    </div>
  );
}

export default Login;
