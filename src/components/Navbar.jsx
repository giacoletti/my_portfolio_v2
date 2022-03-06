import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar data-cy="navbar" position="static" sx={{ p: "0 11rem" }}>
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
        <IconButton
          data-cy="linkedin-nav"
          children={<LinkedIn />}
          color="inherit"
        />
        <IconButton
          data-cy="github-nav"
          children={<GitHub />}
          color="inherit"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
