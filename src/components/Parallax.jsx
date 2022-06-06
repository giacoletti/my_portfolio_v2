import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Typography, Grid } from "@mui/material";

const Parallax = () => {
  return (
    <ParallaxBanner
      data-cy="background-image"
      layers={[
        {
          image: "/data/space-background.jpg",
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
            sx={{ color: "white", ml: "10vw" }}
          >
            Welcome to my portfolio
          </Typography>
        </Grid>
      </Grid>
    </ParallaxBanner>
  );
};

export default Parallax;
