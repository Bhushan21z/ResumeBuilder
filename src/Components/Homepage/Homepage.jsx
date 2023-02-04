import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import * as animationData from "../../Assets/resume1.json";

const styles = {
  panels: {
    backgroundColor: "#1c2541",
    boxShadow: "1px 1px 1px 1px #3a506b",
    borderRadius: "10px",
    height: "400px",
    mx: 3,
    p: 2,
  },
  typo: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "120px",
    fontFamily: "Roboto",
    lineHeight: "1",
  },
  btn: {
    backgroundColor: "#FFF",
    color: "#0b132b",
    mt: "20px",
    width: "60%",
    height: "80px",
    boxShadow: "1px 1px 1px 1px #3a506b",
  },
};

const Homepage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#0b132b",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={9}
          sx={{
            mt: "150px",
            height: "100vh",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={7}>
              <Typography sx={styles.typo}>
                Resume <br />
                <span
                  style={{
                    color: "#344966",
                    fontWeight: "bold",
                    fontSize: "140px",
                    fontFamily: "Roboto",
                  }}
                >
                  Builder
                </span>
              </Typography>

              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "40px",
                  fontFamily: "Roboto",
                }}
              >
                <br />
                Analyse your resume and get your score. <br />
              </Typography>

              <Button variant="contained" sx={styles.btn}>
                <Typography sx={{ fontSize: "20px" }}>
                  Get Started <span style={{ fontSize: "30px" }}> &#8594;</span>
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                mt: "200px",
              }}
            >
              <Lottie options={defaultOptions} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: "100vh",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={5} sx={styles.panels}>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "50px",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                Build
              </Typography>

              <Typography
                sx={{
                  color: "#3a506b",
                  fontSize: "30px",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                Build your resume with our resume builder.
              </Typography>
            </Grid>
            <Grid item xs={5} sx={styles.panels}>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "30px",
                  fontFamily: "Roboto",
                  textAlign: "center",
                }}
              >
                Analyse
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
