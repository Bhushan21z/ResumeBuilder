import React from "react";
import DisplayResume from "../Components/Display/displayPdf";
import Appbar from "../Components/Appbar";
import Footer from "../Components/Footer";
const Display = () => {
  return (
    <div
      style={{
        backgroundColor: "#1c2541",
      }}
    >
      <Appbar />
      <DisplayResume />
      <Footer />
    </div>
  );
};

export default Display;
