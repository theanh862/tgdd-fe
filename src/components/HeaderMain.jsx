import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Select from "@mui/material/Select";
import LocationButton from "./Header/LocationButton";
import Navbar from "./Header/Nav";
import LoginButton from "./Header/LoginButton";
import Logo from "./Header/Logo"
import CartIconButton from "./Header/CartButton";

function Header() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "#FFD700", color: "#000" }}>
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Logo */}
        <Logo />

        {/* Ô search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            px: 1,
            width: 350,
            borderRadius: 20,
            height: 40
          }}
        >
          <InputBase
            placeholder="Bạn tìm gì..."
            sx={{ ml: 1, flex: 1 , fontSize: 14}}
          />
          <IconButton type="submit" sx={{ p: "5px" }}>
            <SearchIcon />
          </IconButton>
        </Box>

          {/* login btn */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
         <LoginButton />

          {/* cart btn */}
       <CartIconButton />
        </Box>
        {/* location btn */}
        <LocationButton />
      </Toolbar>
      <Navbar />
    </AppBar>
    
  );
  
}

export default Header;
