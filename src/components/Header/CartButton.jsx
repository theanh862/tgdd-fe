import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CartIconButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      navigate("/login");
      return;
    }
    navigate("/cart");
  };

  return (
    <button
      className="btn d-flex align-items-center"
      onClick={handleClick}
      style={{
        color: "#000",
        fontWeight: 500,
        borderRadius: "50px",
        textTransform: "none",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fe9")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      <i className="bi bi-cart me-2"></i>
      Giỏ hàng
    </button>
  );
}

export default CartIconButton;
