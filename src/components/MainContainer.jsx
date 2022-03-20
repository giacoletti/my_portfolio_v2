import React from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { Paper, Container, Grid } from "@mui/material";

const MainContainer = () => {
  return (
    <Paper
      elevation={16}
      sx={{
        marginLeft: "5%",
        marginTop: "-100px",
        paddingTop: "50px",
        paddingBottom: "50px",
        position: "relative",
        width: "90%"
      }}
    >
      <Container>
        <Grid container rowSpacing={5} columnSpacing={3}>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </Grid>
      </Container>
    </Paper>
  );
};

export default MainContainer;
