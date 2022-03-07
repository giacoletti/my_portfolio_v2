import React from "react";
import { Grid, Typography } from "@mui/material";

const ContactSection = () => {
  return (
    <>
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
    </>
  );
};

export default ContactSection;
