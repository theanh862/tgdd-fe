import React from "react";
import { Box, Select, MenuItem } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function LocationButton() {
  return (
    <Box
      sx={{
        color: "black",
        fontWeight: 500,
        backgroundColor: "#ffe14c",
        borderRadius: "20px",
        px: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "320px",
        ml: 1,
        height: 50,
      }}
    >
      <Select
      variant="standard"
        disableUnderline
        defaultValue="hanoi"
        border= "none"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontSize: 14,
          minWidth: 320,
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            gap: 1,
            padding: 0,
          },
        }}
      >
        <MenuItem value="hanoi">
          <LocationOnIcon fontSize="small" /> Hà Nội
        </MenuItem>
        <MenuItem value="hcm">
          <LocationOnIcon fontSize="small" /> TP. Hồ Chí Minh
        </MenuItem>
        <MenuItem value="other">
          <LocationOnIcon fontSize="small" /> Địa điểm khác
        </MenuItem>
      </Select>
    </Box>
  );
}

export default LocationButton;
