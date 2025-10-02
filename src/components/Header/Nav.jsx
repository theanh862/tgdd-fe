import React from "react";
import { Box, Button } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ReplayIcon from "@mui/icons-material/Replay"; 
import PrintIcon from "@mui/icons-material/Print";
import SimCardIcon from "@mui/icons-material/SimCard";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const menus = [
    { label: "Điện thoại", icon: <PhoneIphoneIcon fontSize="small" /> },
    { label: "Laptop", icon: <LaptopIcon fontSize="small" /> },
    { label: "Phụ kiện", icon: <HeadphonesIcon fontSize="small" />, dropdown: true },
    { label: "Tablet", icon: <TabletMacIcon fontSize="small" /> },
    
    { label: "Smartwatch", icon: <WatchIcon fontSize="small" /> },
    { label: "Đồng hồ", icon: <WatchIcon fontSize="small" /> },
    { label: "Máy cũ, Thu cũ", icon: <ReplayIcon fontSize="small" />, dropdown: true },
    { label: "Màn hình, Máy in", icon: <PrintIcon fontSize="small" />, dropdown: true },
    { label: "Sim, Thẻ cào", icon: <SimCardIcon fontSize="small" />, dropdown: true },
    { label: "Dịch vụ tiện ích", icon: <MiscellaneousServicesIcon fontSize="small" />, dropdown: true },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 1,
        backgroundColor: "#FFD700",
      }}
    >
      {menus.map((menu, index) => (
        <Button
          key={index}
          startIcon={menu.icon}
          endIcon={menu.dropdown ? <ArrowDropDownIcon /> : null}
          sx={{
            color: "#000",
            textTransform: "none",
            fontSize: 14,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#fe9",
            },
          }}
        >
          {menu.label}
        </Button>
      ))}
    </Box>
  );
}

export default Navbar;
