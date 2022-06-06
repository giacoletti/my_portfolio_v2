import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-scroll";

const MobileDropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        data-cy="mobile-menu-icon"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <Link to="about" smooth={true} offset={-100}>
          <MenuItem data-cy="about-menu-item">About Me</MenuItem>
        </Link>
        <Link to="projects" smooth={true} offset={-100}>
          <MenuItem data-cy="projects-menu-item">Projects</MenuItem>
        </Link>
        <Link to="contact" smooth={true}>
          <MenuItem data-cy="contact-menu-item">Contact</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default MobileDropdownMenu;
