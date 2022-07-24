import React from "react";
import { Grid, Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          data-cy="about-header"
          id="about"
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
          I'm a Full Stack Web Developer graduated from&nbsp;
          <a
            href="https://craftacademy.se/english/"
            style={{ textDecoration: "none" }}
          >
            Craft Academy
          </a>
          , looking to pursue my dream to work as a developer with the best
          teams and best environments the IT industry has to offer. Logical
          problems and challenges always fascinated me, and they pushed me into
          becoming a software developer. Agile methodologies are my preference,
          they helped my growth and learning process. I mostly code in
          JavaScript (React, Next.js, Node.js), I have developed back-end APIs in Ruby on Rails too, but
          I'm open to new languages and technologies. I look forward to work
          with people who share my love and dedication for coding.
        </Typography>
      </Grid>
    </>
  );
};

export default AboutSection;
