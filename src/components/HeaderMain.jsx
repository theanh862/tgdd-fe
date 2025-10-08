import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Header/Logo";
import LoginButton from "./Header/LoginButton";
import CartButton from "./Header/CartButton";
import LocationButton from "./Header/LocationButton";
import Navbar from "./Header/Nav";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      {/* Thanh trên cùng */}
      <nav
        className="navbar sticky-top "
        style={{ backgroundColor: "#FFD700", color: "#000", boxShadow: 'none'}}
      >
        <div className="container-fluid d-flex align-items-center justify-content-center ">
          {/* Logo */}
          <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <Logo />
          </div>

          {/* Ô tìm kiếm */}
          <form
            className="d-flex align-items-center bg-white rounded-pill px-2 mx-3"
            style={{ width: "350px", height: "40px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="form-control border-0 rounded-pill"
              placeholder="Bạn tìm gì..."
              style={{ fontSize: "14px", boxShadow: "none" }}
            />
            <button
              type="submit"
              className="btn m-0  text-dark "
              style={{ borderRadius: "50%"}}
            >
              <i className="bi bi-search  "
              ></i>
            </button>
          </form>

          {/* Nút đăng nhập và giỏ hàng */}
          <div className="d-flex ">
            <LoginButton />
            <CartButton />
          </div>

          {/* Location Button */}
          <div className="ms-3">
            <LocationButton />
          </div>
        </div>
      </nav>

      {/* Navbar menu dưới */}
      <Navbar />
    </>
  );
}

export default Header;
