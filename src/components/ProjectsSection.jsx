import React from "react";
import { Grid, Typography } from "@mui/material";

const ProjectsSection = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          data-cy="projects-header"
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "200" }}
        >
          Projects
        </Typography>
      </Grid>
    </>
  );
};

export default ProjectsSection;
