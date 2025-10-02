import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import { getUser } from "../../services/api";


function LoginButton () {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => { 
    const fetchUser = async () => {
      try {
        const response = await getUser();
        setUser(response.data)
        localStorage.setItem("role", response.data.role)
      } catch (err) {
        console.error("Không lấy được user:", err);
      }
    };

    fetchUser();

  }, []);

  const handleClick = () => {
    if (!user) { 
      navigate('/login')
    } else {  
      if (user.role === 'admin') {
        navigate('/admin/dashboard')
      } else {
        navigate('/userordersdetail')
      }

    }
  };

return (
  <>
     <Button
        startIcon={<AccountCircleIcon />}
        onClick={handleClick}
        sx={{ 
            color: "#000",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: 50,
            ml: 2,
            "&:hover": {
              backgroundColor: "#fe9"
            }
          }}     
      >
        { user ? `${user.name}` : 'Đăng Nhập' }
      </Button>
      </>
);
}




export default LoginButton