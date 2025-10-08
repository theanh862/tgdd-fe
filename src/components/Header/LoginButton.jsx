import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LoginButton() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response.data);
        localStorage.setItem("role", response.data.role);
      } catch (err) {
        console.error("Không lấy được user:", err);
      }
    };

    fetchUser();
  }, []);

  const handleClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (user.role === "admin") {
        navigate("/admindashboard");
      } else {
        navigate("/userordersdetail");
      }
    }
  };

  return (
    <button
      className="btn d-flex align-items-center"
      onClick={handleClick}
      style={{
        color: "#000",
        textTransform: "none",
        fontWeight: 500,
        borderRadius: "50px",
        marginLeft: "8px",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fe9")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      <i className="bi bi-person-circle me-2"></i>
      {user ? `${user.name}` : "Đăng Nhập"}
    </button>
  );
}

export default LoginButton;
