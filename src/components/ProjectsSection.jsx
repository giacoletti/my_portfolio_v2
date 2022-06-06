import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get("./data/projects.json");
      setProjects(data);
    } catch (error) {
      // handle errors with a message
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectsList = projects.map((project, index) => {
    project.index = index + 1;
    return (
      <Grid item xs={12} sm={6} md={4} key={project.index}>
        <ProjectCard project={project} />
      </Grid>
    );
  });

  return (
    <>
      <Grid item xs={12}>
        <Typography
          data-cy="projects-header"
          id="projects"
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "200" }}
        >
          Projects
        </Typography>
      </Grid>
      {projectsList}
    </>
  );
};

export default ProjectsSection;
