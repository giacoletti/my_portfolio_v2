import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Typography, Grid } from "@mui/material";

const Parallax = () => {
  return (
    <ParallaxBanner
      data-cy="background-image"
      layers={[
        {
          image: "/images/space-background.jpg",
          speed: -15
        }
      ]}
      style={{ height: 700 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="left"
        sx={{ marginTop: "300px" }}
      >
        <Grid item xs={10} sx={{ zIndex: 5 }}>
          <Typography
            data-cy="welcome-header"
            variant="h3"
            gutterBottom
            component="div"
            sx={{ color: "white", ml: "10vw", textShadow: "0px 0px 0.1em rgba(0,0,0,0.8)" }}
          >
            Welcome to my portfolio
          </Typography>
        </Grid>
      </Grid>
    </ParallaxBanner>
  );
};

export default Parallax;
