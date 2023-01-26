import React, { useRef } from "react";
import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router";
import { Grid, Paper, TextField, Button, Typography,Link,Modal, Box } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import Auth from "./auth2";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import setCookie from "../../../hooks/setCookie";
import getCookie from "../../../hooks/getCookie";
import removeCookie from "../../../hooks/removeCookie";
import { useNavigate } from "react-router-dom";

var modalText="Proceed";

const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2, margin: "8px 0" };
const paperStyle = {
  padding: 20,
  width: 600,
  margin: "0 auto",
  height: "500px",
  // boxShadow: "1px 0px 0px 0px black",
};
const btn = {
  height: 40,
  width: 150,
  margin: "5px",
  backgroundColor: "#1D3557",
  fontSize: 10,
  "&:hover": {
    border: "1px solid white",
    backgroundColor: "#1D3557",
  },
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const LoginPage = () => {
  const form = useRef();
   const navigate = useNavigate();
   //// Modal Code
   const [open, setOpen] = useState(false);
   const [lastpage, setLastpage] = useState("/login");
   const [message, setMessage] = useState("Proceed");
   const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
 
   const navigation = () => {
     if (lastpage === "/login") {
       window.location.reload();
     } else {
       navigate(lastpage);
     }
   };

  const LoginUser = (e) => {
    e.preventDefault();
    var formjson = {
      email: form.current.email.value,
      password: form.current.password.value,
    };

    console.log(formjson);
    axios
        .post("http://localhost:8000/users/login", formjson)
        .then(response => {
            console.log(response);
            modalText = "Login Successfully";
            setLastpage("/Home");
            setMessage("Proceed");
            const cookieState = {
              email: this.state.email,
              password: this.state.password,
            };
            setCookie("login", JSON.stringify(cookieState));
        })
        .catch(error => {
            console.log(error.response);
            modalText = "Error Login";
            setLastpage("/login");
            setMessage("Try Again");
        })
        handleOpen();
  };

  const headerStyle = { margin: 0 };
  return (
    <Grid
      sx={{
        padding: "5%",
        height: "auto",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form ref={form} onSubmit={LoginUser}>
          <TextField
            style={text}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            style={text}
            name="password"
            type="password"
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />

          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
            value="Send"
          >
            Sign Up
          </Button>
        </form>
         {/* <Authentication /> */}
         <GoogleOAuthProvider clientId="22391200397-ilcuagqhcvspoafiqotvn7up9jlg27k4.apps.googleusercontent.com">
          <Auth />
        </GoogleOAuthProvider>
        <ButtonGroup
            sx={{
              display: "flex",
              backgroundColor: "transparent",
              mt: "100px",
            }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={btn} color="primary">
              <Link
                style={{ textDecoration: "None", color: "white" }}
                href={`/forgotpassword`}
              >
                Forgot Password
              </Link>
            </Button>
            <Link
              style={{ textDecoration: "None", color: "white" }}
              href={`/register`}
            >
              <Button sx={btn} color="primary">
                New User? Sign Up
              </Button>
            </Link>
          </ButtonGroup>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalText}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <Link
                style={{ textDecoration: "None", color: "white" }}
                to={lastpage}
              > */}
            <Button
              onClick={navigation}
              style={buttons}
              variant="contained"
              color="primary"
            >
              {message}
            </Button>
            {/* </Link> */}
          </Typography>
        </Box>
      </Modal>
      </Paper>
    </Grid>

    // <form ref={form} onSubmit={SendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="to_name" />
    //   <label>Email</label>
    //   <input type="email" name="to_email" />
    //   <label>Password</label>
    //   <input type="text" name="password" />
    //   <input type="hidden" name="otp" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};
