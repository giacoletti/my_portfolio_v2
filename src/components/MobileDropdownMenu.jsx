import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const MobileDropdownMenu = () => {
  return (
    <>
      <IconButton data-cy="mobile-menu-icon" color="inherit">
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default MobileDropdownMenu;
