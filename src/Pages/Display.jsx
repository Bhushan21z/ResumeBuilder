import React from "react";
import DisplayResume from "../Components/Display/displayPdf";
import Appbar from "../Components/Appbar";
import Footer from "../Components/Footer";
import { useLocation } from 'react-router-dom'
const Display = () => {
  const location = useLocation()
  console.log(location.state);
  var data={
    tempno: location.state.tempno,
    resdata: location.state.resdata
  }

  return (
    <div
      style={{
        backgroundColor: "#1c2541",
      }}
    >
      <Appbar />
      <DisplayResume propdata={data} />
      <Footer />
    </div>
  );
};

export default Display;
