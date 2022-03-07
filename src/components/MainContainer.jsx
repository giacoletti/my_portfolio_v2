import React, { useState, useEffect } from "react";
import { Paper, Container, Grid, Typography } from "@mui/material";

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
            <Typography
              data-cy="about-description"
              variant="body1"
              gutterBottom
            >
              Example text
            </Typography>
          </Grid>
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
          <Grid item xs={12}>
            <Typography
              data-cy="contact-header"
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontWeight: "200" }}
            >
              Contact
            </Typography>
          </Grid>
        </Grid>
        <ul>{mockList}</ul>
      </Container>
    </Paper>
  );
};

export default MainContainer;
