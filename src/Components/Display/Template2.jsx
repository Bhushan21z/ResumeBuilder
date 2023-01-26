import React from "react";
import "./tempstyle.css";
import Grid from "@mui/material/Grid";
import { Divider, Typography, Stack } from "@mui/material";

const links = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/bhushan-wanjari-5b7a0a1b0/",
  },
  {
    title: "Github",
    link: " ",
  },
  {
    title: "Email",
    link: " ",
  },
  {
    title: "Phone",
    link: " ",
  },
];

function Template() {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{ width: "587px", height: "834px", justifyContent: "center" }}
      >
        <Grid item xs={12} sx={{ m: 2 }}>
          <Typography
            variant="h6"
            sx={{ color: "#000", fontFamily: "Roboto", textAlign: "center" }}
          >
            Bhushan Wanjari
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            {links.map((link) => (
              <Typography
                variant="body2"
                sx={{ color: "#000", fontFamily: "Roboto" }}
              >
                {link.title}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Template;
