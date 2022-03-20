import React from "react";
import { Grid, Typography, Link } from "@mui/material";

const ContactSection = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          data-cy="contact-header"
          id="contact"
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "200" }}
        >
          Contact
        </Typography>
        <Typography variant="body1" gutterBottom>
          For any enquiries, feel free to send me an email
        </Typography>
        <Typography variant="body1" gutterBottom>
          <Link href="mailto:giacoletti92@gmail.com">
            giacoletti92@gmail.com
          </Link>
        </Typography>
      </Grid>
    </>
  );
};

export default ContactSection;
