import React, { Component } from "react";
import {
  Box,
  Grid,
  Button,
  Stepper,
  Typography,
  Step,
  StepLabel,
  CssBaseline,
} from "@material-ui/core/";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import UploadPane from "component/Separation/UploadPane.jsx";
import css from "../css/kanaFont.module.css";

const vhPerPx = 100 / document.documentElement.clientHeight;
const heightOfFooter =
  (11 * document.documentElement.clientWidth) /
  document.documentElement.clientHeight;
let heightOfCopy = 100 - heightOfFooter;

heightOfCopy += "vh";

const style = {
  secondPage: {
    height: heightOfCopy,
    backgroundColor: "#DED3D341",
    textAlign: "left",
  },
};

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "transparent",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: "3vw 3vw 0px 3vw",
  },
}));

const SelectFile = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box px="10vw" py="7vw" height="100%">
        <Grid container>
          <Grid item xs={4}>
            <span className={css.separationPane1}> {props.feature_no}.</span>
            <span className={css.separationPane2}> {props.feature} </span>
          </Grid>
          <Grid item xs={7}>
            <ThemeProvider theme={theme}>
              <Stepper activeStep={props.activeStep}>
                {props.steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step
                      key={label}
                      {...stepProps}
                      style={{ color: "black" }}
                    >
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </ThemeProvider>
            <Box align="center">
              <Typography align="left" className={classes.instructions}>
                Select a file to be separated into audio for each instrument ...
              </Typography>
              <UploadPane />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default SelectFile
