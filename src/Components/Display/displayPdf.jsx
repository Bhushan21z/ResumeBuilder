import React, { Component } from "react";
// import { render } from 'react-dom';
import Button from "@mui/material/Button";
import jsPDF from "jspdf";
import Template from "./Template1";

import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";
import Template5 from "./Templates/Template5";
import Template6 from "./Templates/Template6";
// import Heading from '../Reports/Heading';
// import Analysis from '../Reports/Analysis';
import "./tempstyle.css";


class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Still, Jaime",
      rank: "SGT",
      description: "Demonstrate how to export an HTML section to PDF",
    };
  }
  generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#resume"), {
      callback: function (pdf) {
        pdf.save("userresume.pdf");
      },
    });
  };

  render() {
    console.log(this.props.propdata.resdata);
    let template;
    if (this.props.propdata.tempno==1) {
      template = <Template1 resdata={this.props.propdata.resdata} />;
    } 
    else if (this.props.propdata.tempno==2) {
      template = <Template2 resdata={this.props.propdata.resdata} />;
    }
    else if (this.props.propdata.tempno==3) {
      template = <Template3 resdata={this.props.propdata.resdata} />;
    }
    else if (this.props.propdata.tempno==4) {
      template = <Template4 resdata={this.props.propdata.resdata} />;
    }
    else if (this.props.propdata.tempno==5) {
      template = <Template5 resdata={this.props.propdata.resdata} />;
    }else {
      template = <Template6 resdata={this.props.propdata.resdata} />;
    }
    return (
      <div id="outerDiv">
        <div id="resume">
          {/* <Template resdata={this.props.propdata.resdata} /> */}
          {template}
        </div>
        <Button
          onClick={this.generatePDF}
          sx={{
            width: "190px",
            height: "60px",
            marginBottom: "10px",
            backgroundColor: "#EE6C4D",
            borderRadius: "10px",
            padding: "5px",
          }}
        >
          {" "}
          Download{" "}
        </Button>
      </div>
    );
  }
}

export default Display;
