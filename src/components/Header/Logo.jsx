import React from "react";
import { useNavigate } from "react-router-dom";

function IconButton() {
  const navigate = useNavigate();

  return (
    <img
      src="/tgdd-icon.png"
      alt="Thế Giới Di Động"
      width="240"
      height="45"
      className="me-3 mb-1"
      style={{
        objectFit: "contain",
        cursor: "pointer",
        transition: "opacity 0.2s",
      }}
      onClick={() => navigate("/")}
      onMouseOver={(e) => (e.currentTarget.style.opacity = 0.8)}
      onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
    />
  );
}

export default IconButton;
