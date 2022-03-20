import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { Link } from "react-scroll";

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
        <Link to="about" smooth={true}>
          <Button
            data-cy="about-nav"
            color="inherit"
            sx={{ textTransform: "capitalize" }}
          >
            About Me
          </Button>
        </Link>
        <Link to="projects" smooth={true}>
          <Button
            data-cy="projects-nav"
            color="inherit"
            sx={{ textTransform: "capitalize" }}
          >
            Projects
          </Button>
        </Link>
        <Link to="contact" smooth={true}>
          <Button
            data-cy="contact-nav"
            color="inherit"
            sx={{ textTransform: "capitalize" }}
          >
            Contact
          </Button>
        </Link>
        <IconButton
          data-cy="linkedin-nav"
          href="https://www.linkedin.com/in/giovanni-iacoletti/"
          children={<LinkedIn />}
          color="inherit"
        />
        <IconButton
          data-cy="github-nav"
          href="https://github.com/giacoletti"
          children={<GitHub />}
          color="inherit"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
