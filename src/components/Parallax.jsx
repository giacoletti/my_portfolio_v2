import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Typography, Grid } from "@mui/material";

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
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{marginTop: "300px", ml: "-10%"}}
      >
        <Grid item sx={{ position: "absolute" }}>
          <Typography
            data-cy="welcome-header"
            variant="h3"
            gutterBottom
            component="div"
            sx={{ color: "white" }}
          >
            Welcome to my portfolio
          </Typography>
        </Grid>
      </Grid>
    </ParallaxBanner>
  );
};

export default Parallax;
