import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
  Grid,
} from "@mui/material";
import GradingIcon from "@mui/icons-material/Grading";
import { useForm, FormProvider } from "react-hook-form";
import Personal from "./AllPages/Personal";
import Education from "./AllPages/Education";
import WorkExp from "./AllPages/WorkExp";
import Achievements from "./AllPages/Achievements";
import Projects from "./AllPages/Projects";

function getSteps() {
  return [
    "Personal Information",
    "Education Information",
    "Work Experience",
    "Achievements",
    "Projects",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Personal />;
    case 1:
      return <Education />;
    case 2:
      return <WorkExp />;
    case 3:
      return <Achievements />;
    case 4:
      return <Projects />;
    default:
      return "unknown step";
  }
}

const Makenew = () => {

  //////////


  var dummydata = {
    _id: "63d80cd760de3c53756de372",
    email: "bhushanwanjari@gmail.com",
    personal: {
      name: "Bhushan Wanjari",
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






  //////////
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      Email: "",
      Address: "",
      Phone: "",
      College: "",
      Branch: "",
      Linkedin: "",
      Github: "",
      Company1: "",
      JobDesc1: "",
      Company2: "",
      JobDesc2: "",
      Achievement1: "",
      Achievemetdesc1: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      navigate("/templates",{state: {
        data: dummydata
      }});
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Grid
        container
        sx={{
          width: "100%",
          padding: "5%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0b132b",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              marginBottom: "3%",
            }}
          >
            <GradingIcon
              sx={{
                fontSize: "2rem",
                color: "#fff",
                marginRight: "10px",
              }}
            />
            Resume Builder
          </Typography>
        </Grid>

        <Grid
          sx={{
            width: "70%",
            padding: "2%",
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: "1px solid #1c2541",
          }}
        >
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};

              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <Typography variant="h3" align="center">
              Thank You
            </Typography>
          ) : (
            <>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                  {getStepContent(activeStep)}

                  <Button
                    sx={{ mr: 1 }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    back
                  </Button>

                  <Button
                    sx={{ mr: 1 }}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </form>
              </FormProvider>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Makenew;
