import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar data-cy="navbar" position="static">
      <Toolbar>
        <Typography
          data-cy="header-nav"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Giovanni Iacoletti
        </Typography>
        <Button
          data-cy="about-nav"
          color="inherit"
          sx={{ textTransform: "capitalize" }}
        >
          About Me
        </Button>
        <Button
          data-cy="projects-nav"
          color="inherit"
          sx={{ textTransform: "capitalize" }}
        >
          Projects
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
