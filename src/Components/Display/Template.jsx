import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Template1 from "../../Assets/Template1.jpg";
import Template2 from "../../Assets/Template2.jpg";
import Template3 from "../../Assets/Template3.jpg";
import Template4 from "../../Assets/Template4.jpg";
import { Link } from "react-router-dom";
import TaskIcon from "@mui/icons-material/Task";
import { useLocation, useNavigate } from "react-router-dom";

const data = [
  {
    title: "Template 1",
    image: Template1,
    no: 1,
  },
  {
    title: "Template 2",
    image: Template2,
    no: 2,
  },
  {
    title: "Template 3",
    image: Template3,
    no: 3,
  },
  {
    title: "Template 4",
    image: Template4,
    no: 4,
  },
  {
    title: "Template 5",
    image: Template4,
    no: 5,
  },
  {
    title: "Template 6",
    image: Template4,
    no: 6,
  },
];

const Template = () => {
  const location = useLocation();

  var resdata= location.state.data;
  console.log(resdata);
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          mt: "50px",
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
          marginBottom: "3%",
        }}
      >
        <TaskIcon
          sx={{
            fontSize: "2.5rem",
            color: "#000",
            marginRight: "5px",
          }}
        />
        Templates
      </Typography>

      <Grid
        container
        sx={{
          padding: "1%",
          justifyContent: "center",
        }}
      >
        {/* <Grid item> */}
        {data.map((item) => (
          <Link to="/display" state={{tempno: item.no , resdata: resdata }} style={{ textDecoration: "None" }}>
            <Card
              sx={{
                width: "auto",
                margin: "20px ",
                backgroundColor: "#023047",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                padding: "5px",
                "&:hover": {
                  boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.75)",
                  border: "1px solid #023047",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  width="auto"
                  image={item.image}
                  alt={item.title}
                />
              </CardActionArea>
              <CardActions
                sx={{
                  backgroundColor: "#023047",
                }}
              >
                <Button size="small" color="primary">
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "20px",
                      textDecoration: "none",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Template;
