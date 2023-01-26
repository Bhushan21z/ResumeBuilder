import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2 };
// const paperStyle = { padding: 20, width: 600, margin: "0 auto" };
const paperStyle = {
  padding: 20,
  width: 600,
  margin: "0 auto",
  height: "500px",
  // boxShadow: "1px 0px 0px 0px black",
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
var modalText = "Proceed";

export const OtpEnter = (props) => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.data);

  //// Modal Code
  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/otp");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/otp") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  const OtpVer = (e) => {
    e.preventDefault();
    if (form.current.OTP.value === location.state.data.otp) {
      const newstate = {
        name: location.state.data.name,
        email: location.state.data.email,
        password: location.state.data.password,
      };
      console.log(newstate);
      axios
        .post("http://localhost:8000/users", newstate)
        .then((response) => {
          console.log(response);
          modalText = "Registered Successfully";
          setLastpage("/login");
          setMessage("Proceed");
        })
        .catch((error) => {
          console.log(error.response);
          modalText = "Error Registering";
          setLastpage("/otp");
          setMessage("Try Again");
        });
    } else {
      console.log("error otp");
      modalText = "Wrong OTP";
      setLastpage("/otp");
      setMessage("Try Again");
    }
    handleOpen();
  };

  return (
    <Grid
      sx={{
        padding: "5%",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h3>Enter OTP</h3>
        </Grid>
        <form ref={form} onSubmit={OtpVer}>
          <TextField
            style={text}
            name="OTP"
            fullWidth
            label="OTP"
            placeholder="Enter OTP"
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

    // <form ref={form} onSubmit={OtpVer}>

    //   <label>Enter Otp</label>
    //   <input name="otp" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};
