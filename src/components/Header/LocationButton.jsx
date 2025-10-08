import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LocationButton() {
  return (
    <div
      className="d-flex align-items-center justify-content-between"
      style={{
        color: "black",
        fontWeight: 500,
        backgroundColor: "#ffe14c",
        borderRadius: "20px",
        padding: "0 12px",
        width: "320px",
        height: "50px",
        marginLeft: "8px",
      }}
    >
      <select
        className="form-select border-0 bg-transparent fw-medium"
        defaultValue="hanoi"
        style={{
          fontSize: "14px",
          boxShadow: "none",
          cursor: "pointer",
        }}
      >
        <option value="hanoi">
           Hà Nội
        </option>
        <option value="hcm">
           TP. Hồ Chí Minh
        </option>
        <option value="other">
           Địa điểm khác
        </option>
      </select>
    </div>
  );
}

export default LocationButton;
