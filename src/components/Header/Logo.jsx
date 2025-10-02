import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
function IconButton () {
  const navigate = useNavigate();
  return (

  <Box
      component="img"
      src="/tgdd-icon.png"
      alt="tgdd-icon"
      sx={{
        width: 240,
        height: 45,
        objectFit: "cover",
        mr: 2, 
        mb: "4px",
        cursor : "pointer"
      }}
      onClick={() => navigate("/")}
    />
    )
}

export default IconButton