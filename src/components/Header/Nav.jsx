import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const menus = [
    { label: "Điện thoại", icon: "bi-phone" },
    { label: "Laptop", icon: "bi-laptop" },
    { label: "Phụ kiện", icon: "bi-headphones", dropdown: true },
    { label: "Tablet", icon: "bi-tablet" },
    { label: "Smartwatch", icon: "bi-smartwatch" },
    { label: "Đồng hồ", icon: "bi-watch" },
    { label: "Máy cũ, Thu cũ", icon: "bi-arrow-repeat", dropdown: true },
    { label: "Màn hình, Máy in", icon: "bi-printer", dropdown: true },
    { label: "Sim, Thẻ cào", icon: "bi-sim", dropdown: true },
    { label: "Dịch vụ tiện ích", icon: "bi-gear", dropdown: true },
  ];

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-wrap"
      style={{
        backgroundColor: "#FFD700",
        padding: "8px 16px",
      }}
    >
      {menus.map((menu, index) => (
        <button
          key={index}
          className="btn d-flex align-items-center mx-1"
          style={{
            color: "#000",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            transition: "background-color 0.2s",
            borderRadius: "10px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#fe9")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <i className={`bi ${menu.icon} me-1`}></i>
          {menu.label}
          {menu.dropdown && <i className="bi bi-caret-down-fill ms-1"></i>}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
