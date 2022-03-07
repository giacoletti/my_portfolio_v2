import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Typography } from "@mui/material";

const Parallax = () => {
  return (
    <ParallaxBanner
      data-cy="background-image"
      layers={[
        {
          image: "https://i.ibb.co/0FcdMhW/space-background.jpg",
          speed: -15
        }
      ]}
      style={{ height: 700, position: "relative" }}
    >
      <Typography
        data-cy="welcome-header"
        variant="h3"
        gutterBottom
        component="div"
        sx={{ color: "white", position: "absolute", marginLeft: "100px" }}
      >
        Welcome to my portfolio
      </Typography>
    </ParallaxBanner>
  );
};

export default Parallax;
