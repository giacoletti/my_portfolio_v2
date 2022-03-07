import React, { useState, useEffect } from "react";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { Paper, Container, Grid } from "@mui/material";

const MainContainer = () => {
  const [mockData, setMockData] = useState([]);

  const mockList = mockData.map((element) => {
    return <li>{element}</li>;
  });

  useEffect(() => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(`This is fake data ${i}`);
    }
    setMockData(array);
  }, []);

  return (
    <Paper
      elevation={16}
      sx={{
        marginLeft: "5%",
        marginTop: "-100px",
        paddingTop: "50px",
        position: "absolute",
        width: "90%"
      }}
    >
      <Container>
        <Grid container rowSpacing={5}>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </Grid>
        <ul>{mockList}</ul>
      </Container>
    </Paper>
  );
};

export default MainContainer;
