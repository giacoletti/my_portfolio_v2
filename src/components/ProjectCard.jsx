import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Button
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectCard = ({ project }) => {
  return (
    <Card
      data-cy={`project-card-${project.index}`}
      sx={{ maxWidth: 300, boxShadow: 2 }}
    >
      <CardActionArea href={project.url}>
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
      </CardActionArea>
      {project.github && (
        <CardActions>
          <Button
            data-cy="project-github-btn"
            size="small"
            color="primary"
            href={project.github}
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ProjectCard;
