import { Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function CartIconButton () {

  const navigate = useNavigate() ;

  const handleClick = () => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      navigate("/login")
      return
    }
    navigate("/cart")
  };

  return(
  <Button
    startIcon={<ShoppingCartIcon />}
    onClick={handleClick}
    sx={{ 
          color: "#000",
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 50,
            "&:hover": {
              backgroundColor: "#fe9",         
            }
    }}
  >
    Giỏ hàng
  </Button>
  )
}

export default CartIconButton;