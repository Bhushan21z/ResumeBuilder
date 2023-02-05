import React from "react";
import "../tempstyle.css";
import Grid from "@mui/material/Grid";
import { Divider, Icon, Typography } from "@mui/material";

const Styles = {
  subheading: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "#003f88",
    mt: 2,
    mb: 1,
  },

  workexp1: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  },

  workexp2: {
    fontSize: "12px",
    color: "#6c757d",
    mr: 2,
    // fontWeight: "bold",
  },
  workexp3: {
    fontSize: "15px",
    color: "#6c757d",
    mb: 1,
    fontWeight: "bold",
  },
  workexp4: {
    fontSize: "12px",
    color: "#6c757d",
    mr: 1,
  },
};

// var dummydata =
//   "Data Scientist with three years of experience in analyzing large data sets and coming up with data-driven insights for early-stage technology companies. Worked in teams of 8-12 team members.";
// var name = "Bhushan Wanjari";

var dummydata2 = {
  _id: "63d80cd760de3c53756de372",
  email: "bhushanwanjari@gmail.com",
  personal: {
    name: "Template4",
    position: "Software Engineer",
    contact: "7709317844",
    linkedin: "bhushan-wanjari-952042213/",
    github: "bhushan-wanjari-952042213/",
    email: "wanjaribl@rknec.edu",
    bio: "Data Scientist with three years of experience in analyzing large data sets and coming up with data-driven insights for early-stage technology companies.",
    _id: "63d80cd760de3c53756de373",
  },
  skills: ["C++", "Python", "Java", "Javascript", "React", "Django"],
  education: [
    {
      name: "Shri Ramdeobaba College of Engineering and Management",
      degree: "BE CSE",
      city: "Nagpur",
      start: "2020",
      end: "2024",
      _id: "63d80cd760de3c53756de374",
    },
  ],
  projects: [
    {
      name: "College Wit",
      info: [
        "Data Scientist with three years of experience in analyzing large data sets and coming up with data-driven insights for early-stage technology companies. Worked in teams of 8-12 team members.",
      ],
      link: "https://collegewit.netlify.app/",
      _id: "63d80cd760de3c53756de375",
    },
    {
      name: "Resume Builder",
      info: [
        "Data Scientist with three years of experience in analyzing large data sets and coming up with data-driven insights for early-stage technology companies. Worked in teams of 8-12 team members.",
      ],
      link: "https://collegewit.netlify.app/",
      _id: "63d80cd760de3c53756de376",
    },
    {
      name: "Gadget Reviewer",
      info: [
        "Data Scientist with three years of experience in analyzing large data sets and coming up with data-driven insights for early-stage technology companies. Worked in teams of 8-12 team members.",
      ],
      link: "https://collegewit.netlify.app/",
      _id: "63d80cd760de3c53756de377",
    },
  ],
  achievements: [
    {
      name: "SIH'22 Finalist",
      cerlink: "https://collegewit.netlify.app/",
      _id: "63d80cd760de3c53756de378",
    },
    {
      name: "ach2",
      cerlink: "https://collegewit.netlify.app/",
      _id: "63d80cd760de3c53756de379",
    },
  ],
  experience: [
    {
      name: "Qodeit",
      role: "Backend Developer",
      info: [
        "Data Scientist with three years of experience in analyzing large data sets ",
      ],
      start: "11-Oct-2022",
      end: "11-Dec-2022",
      _id: "63d80cd760de3c53756de37a",
    },
    {
      name: "Briefly",
      role: "Frontend Developer",
      info: [
        "Data Scientist with three years of experience in analyzing large data sets and coming up with data-driven insights for early-stage technology companies. Worked in teams of 8-12 team members.",
      ],
      start: "11-Oct-2022",
      end: "11-Dec-2022",
      _id: "63d80cd760de3c53756de37b",
    },
  ],
  createdAt: "2023-01-30T18:30:47.998Z",
  updatedAt: "2023-01-30T18:30:47.998Z",
  __v: 0,
};

///// API calling code
//// Json data of resume

function Template(props) {
  var dummydata=props.resdata;
  console.log("Template4");
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          py: 2,
          px: 3,
          width: "587px",
          height: "834px",
        }}
      >
        {/* --------------------------Left Grid-------------------------- */}
        <Grid item xs={8}>
          {/* ----------------------Heading---------------------- */}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "#003f88",
            }}
          >
            {dummydata.personal.name}
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "#6c757d" }}>
            {dummydata.personal.position}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#6c757d",
              mt: 1,
            }}
          >
            {dummydata.personal.bio}
          </Typography>
          {/* ------------------- Work Experience ------------------- */}

          <Typography sx={Styles.subheading}>Work Experience</Typography>
          <Divider sx={{ width: "80%", mt: 1, mb: 2 }} />

          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>
                {dummydata.experience[0].role}
              </Typography>
              <Typography sx={Styles.workexp2}>
                {dummydata.experience[0].start} - {dummydata.experience[0].end}
              </Typography>
            </Grid>
            <Typography sx={Styles.workexp3}>
              {dummydata.experience[0].name}
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● {dummydata.experience[0].info[0]}
            </Typography>
          </Grid>

          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>
                {dummydata.experience[0].role}
              </Typography>
              <Typography sx={Styles.workexp2}>
                {dummydata.experience[0].start} - {dummydata.experience[0].end}
              </Typography>
            </Grid>
            <Typography sx={Styles.workexp3}>
              {dummydata.experience[0].name}
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● {dummydata.experience[0].info[0]}
            </Typography>
          </Grid>

          {/* ------------------- Projects ------------------- */}
          <Typography sx={Styles.subheading}>Projects</Typography>
          <Divider sx={{ width: "80%", mt: 1, mb: 2 }} />
          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>
                {dummydata.projects[0].name}
              </Typography>
            </Grid>
            <Typography sx={Styles.workexp4}>
              ● {dummydata.projects[0].info[0]}
              <br />
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● {dummydata.projects[0].link}
              <br />
            </Typography>
          </Grid>
          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>
                {dummydata.projects[0].name}
              </Typography>
            </Grid>
            <Typography sx={Styles.workexp4}>
              ● {dummydata.projects[0].info[0]}
              <br />
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● {dummydata.projects[0].link}
              <br />
            </Typography>
          </Grid>
        </Grid>

        {/* ---------------------------------Right Grid--------------------------  */}
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: "#edede9",
          }}
        >
          {/* ------------------------ Contact ------------------------ */}
          <Grid container sx={{ my: 3, justifyContent: "center" }}>
            <Typography sx={{ fontSize: "15px" }}>Contact</Typography>
            <Divider sx={{ width: "80%", my: 1, color: "black" }} />
            <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 1 }}>
              • Naagpur, MH <br />• {dummydata.personal.contact}
              <br />• {dummydata.personal.email}
              <br />• {dummydata.personal.linkedin}
              <br />• {dummydata.personal.github}
              <br />
            </Typography>
          </Grid>

          {/* ------------------------ Skills ------------------------ */}

          <Grid container sx={{ my: 3, justifyContent: "center" }}>
            <Typography sx={{ fontSize: "15px" }}>Skills</Typography>
            <Divider sx={{ width: "90%", my: 1, color: "black" }} />
            {dummydata.skills.map((skill) => {
              return (
                <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 1 }}>
                  • {skill} <br />
                </Typography>
              );
            })}
            {/* <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 1 }}>
              • Python <br />
              • R <br />
              • SQL <br />
              • Tableau <br />
              • Machine Learning <br />
              • Deep Learning <br />
              • Python <br />
            </Typography> */}
          </Grid>

          {/* ------------------------ Education ------------------------ */}

          <Grid container sx={{ my: 3, justifyContent: "center" }}>
            <Typography sx={{ fontSize: "15px" }}>Education</Typography>
            <Divider sx={{ width: "80%", my: 1, color: "black" }} />
            <Typography
              sx={{
                fontSize: "12px",
                color: "#6c757d",
                mx: 1,
                fontWeight: "bold",
              }}
            >
              {dummydata.education[0].name}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 2 }}>
              <li> {dummydata.education[0].degree} </li>
              <li>
                City Name, {dummydata.experience[0].start} —{" "}
                {dummydata.experience[0].end}
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Template;
