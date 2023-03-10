import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Signup from "./Pages/Register";
import Signin from "./Pages/Login";
import Otp from "./Pages/Otp";
import Templates from "./Pages/Templates";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Report from "./Pages/Report";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/Editprofile";
import Display from "./Pages/Display";
import Form from "./Pages/form";
import Forgotpswd from "./Pages/Forgotpswd";
import Otp2 from "./Pages/Otp2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="register" element={<Signup />} />
        <Route path="otp" element={<Otp />} />
        <Route path="login" element={<Signin />} />
        <Route path="makenew" element={<ResumeBuilder />} />
        <Route path="templates" element={<Templates />} />
        <Route path="report" element={<Report />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="display" element={<Display />} />
        <Route path="/forgotpassword" element={<Forgotpswd />} />
        <Route path="/otppassword" element={<Otp2 />} />

        <Route path="imgform" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
