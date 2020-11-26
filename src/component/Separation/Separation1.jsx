import React from "react";
import SelectFile from "component/SelectFile.jsx";
import { CssBaseline } from "@material-ui/core/";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import css from "css/kanaFont.module.css";
import ScrollToTop from "../ScrollToTop.jsx";

const style = {
  secondPage: {
    // height: "32vw",
    backgroundColor: "#DED3D341",
    textAlign: "left",
    boxSizing: "border-box",
  },
};




function getSteps() {
  return ["Select a file", "Select source targets", "Create an ad"];
}


export default function Separation() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={style.secondPage} id="here">
        <ScrollToTop />
        <SelectFile feature="Separation" steps={steps}/>
      </div>
    </React.Fragment>
  );
}
