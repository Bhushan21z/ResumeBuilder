import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const btn = {
  marginRight: "20px",
  backgroundColor: "transparent",
  color: "white",
  boxShadow: "none",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "#3a506b",
  },
};

const buttons = ["Login", "Register"];

export default function Appbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        height: "auto",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          m: 2,
          backgroundColor: "#1c2541",
          borderRadius: "10px",
          py: 1,
          boxShadow: "1px 1px 1px 1px #3a506b",
        }}
      >
        <Grid container>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Grid container xs={12}>
              <Grid item>
                <Typography color="white">Resume Analyser</Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>

        <ButtonGroup variant="text" aria-label="text button group">
          {buttons.map((button) => (
            <Link
              to={`/${button.toLowerCase()}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button variant="contained" sx={btn}>
                {button}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
