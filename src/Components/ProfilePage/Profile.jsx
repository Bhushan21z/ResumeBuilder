import * as React from "react";
import { Grid, Button, Divider, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import pic from "../../Assets/mike.jpg";
import { Link } from "react-router-dom";

const Item = {
  backgroundColor: "white",
  color: "black",
  minHeight: "600px",
  height: "auto",
  borderRadius: "10px",
  my: 3,
  mx: 1,
  padding: 1,
  justifyContent: "center",
};

const header = {
  fontSize: "20px",
  textAlign: "center",
  background: "#293241",
  color: "white",
  fontFamily: "sans-serif",
  borderRadius: "5px",
};

const personal = [
  { Name: "Mike" },
  { Gender: "male" },
  { Age: "25" },
  { BirthDay: "10/10/1990" },
];

const contact = [
  { Email: "mike@gmail.com" },
  { Phone: "123456789" },
  { LinkedIn: "mike.linkedin.com" },
  { GitHub: "mike.github.com" },
];

const Projects = [{ Project: "Project1" }, { Project2: "Project2" }];

const address = [
  { Street: "1234 Main St" },
  { City: "New York" },
  { State: "NY" },
  { Zip: "12345" },
];

const EditInfo = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        xs={12}
        sx={{ background: "#d3d3d3" }}
      >
        {/* ----------------------------left Bar--------------------------------------------------------------- */}
        <Grid item xs={3} md={3} lg={3} sx={Item} textAlign="center">
          <Card sx={{ maxWidth: 500, width: "auto", boxShadow: "0" }}>
            <CardMedia component="img" height="300" image={pic} />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {personal[0].Name}
              </Typography>
              <Typography
                gutterBottom
                component="div"
                color="text.secondary"
                sx={{
                  fontSize: "20px",
                }}
              >
                Backend Developer
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <Grid container justifyContent="center">
                <Button size="large">
                  <LinkedInIcon sx={{ fontSize: "70px" }} />
                </Button>
                <Button size="Large">
                  <GitHubIcon sx={{ color: "black", fontSize: "60px" }} />
                </Button>
              </Grid>
            </CardActions>

            <Divider />
            <Grid item justifyContent="center">
              <Link to="/editprofile" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "20px",
                    my: 3,
                    width: "200px",
                    height: "50px",
                    borderRadius: "10px",
                    backgroundColor: "#023047",
                    color: "white",
                    boxShadow: "0",
                    position: "relative",

                    "&:hover": {
                      background: "#d3d3d3",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  Edit Info
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>

        {/* -----------------------------------------RIght Bar--------------------------------------------------------- */}

        <Grid item xs={8} md={8} lg={8} sx={Item}>
          <Typography sx={{ fontSize: "40px", m: 3, textAlign: "center" }}>
            Personal Information
          </Typography>
          <Divider />

          <Grid
            container
            justifyContent="center"
            sx={{ my: 3, p: 1, borderRadius: "10px" }}
          >
            {/* ----------------------------------Personal Information-------------------------------- */}
            <Grid item xs={11} sm={11} md={10} lg={5} sx={{ m: 0.5 }}>
              <Card sx={{ width: "auto" }}>
                <CardHeader title="Personal Details" sx={header} />
                <CardContent>
                  {personal.map((data) => {
                    return (
                      <Grid container>
                        <Grid
                          item
                          xs={11}
                          sm={11}
                          lg={11}
                          sx={{ ml: 1, my: 1 }}
                        >
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Contact Information-------------------------------- */}

            <Grid item xs={11} sm={11} md={10} lg={6} sx={{ m: 0.5 }}>
              <Card sx={{ width: "auto" }}>
                <CardHeader title="Contact  " sx={header} />

                <CardContent>
                  {contact.map((data) => {
                    return (
                      <Grid container>
                        <Grid
                          item
                          xs={11}
                          sm={11}
                          lg={11}
                          sx={{ ml: 1, my: 1 }}
                        >
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Projects-------------------------------- */}

            <Grid item xs={10} sm={10} md={10} lg={11} sx={{ m: 1 }}>
              <Card sx={{ width: "auto" }}>
                <CardHeader title="Projects" sx={header} />

                <CardContent>
                  {Projects.map((data) => {
                    return (
                      <Grid container>
                        <Grid item xs={4} sm={3} lg={3} sx={{ ml: 1, my: 1 }}>
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>

                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            Description :
                          </Typography>

                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            Link :
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Address-------------------------------- */}

            <Grid item xs={10} sm={10} md={10} lg={11} sx={{ m: 1 }}>
              <Card sx={{ width: "auto" }}>
                <CardHeader title="Address" sx={header} />

                <CardContent>
                  {address.map((data) => {
                    return (
                      <Grid container>
                        <Grid item sx={{ ml: 1, my: 1 }}>
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Bar */}
    </div>
  );
};

export default EditInfo;
