import React from "react";
import { Grid, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          data-cy="about-header"
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "200" }}
        >
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography data-cy="about-description" variant="body1" gutterBottom>
          Example text
        </Typography>
      </Grid>
    </>
  );
};

export default AboutSection;
