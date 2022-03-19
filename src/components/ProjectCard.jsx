import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ProjectCard = ({ project }) => {
  return (
    <Card data-cy={`project-card-${project.index}`} sx={{ width: 300 }}>
      <CardMedia
        data-cy="project-image"
        component="img"
        height="140"
        image={project.image}
      />
      <CardContent>
        <Typography
          data-cy="project-header"
          gutterBottom
          variant="h5"
          component="div"
        >
          {project.name}
        </Typography>
        <Typography
          data-cy="project-description"
          variant="body2"
          color="text.secondary"
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
