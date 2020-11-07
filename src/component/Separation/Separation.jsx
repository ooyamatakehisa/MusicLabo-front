import React from 'react';
import UploadPane from 'component/Separation/UploadPane.jsx';
import { Box, Grid, Button, Stepper, Typography, Step, StepLabel, CssBaseline } from '@material-ui/core/';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import css from 'css/kanaFont.module.css';
import ScrollToTop from '../ScrollToTop.jsx';


const style = {
    secondPage: {
        // height: "32vw",
        backgroundColor: "#DED3D341",
        textAlign: "left",
        boxSizing: "border-box"
    }
}
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
        padding:"3vw 3vw 0px 3vw"
    },
}));

function getSteps() {
    return ['Select a file', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select a file to be separated into audio for each instrument ...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}


export default function Separation() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const handleNext = () => {
        let newSkipped = skipped;
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    const handleReset = () => { setActiveStep(0); };

    return (
        <React.Fragment>
            <CssBaseline />
            <div style={style.secondPage} id="here">
                <ScrollToTop />
                <Box px="10vw" py="7vw" height="100%">
                    <Grid container>
                        <Grid item xs={4}>
                            <span className={css.separationPane1}> 01.</span>
                            <span className={css.separationPane2}> SEPARATION</span>
                        </Grid>
                        <Grid item xs={7}>
                            <ThemeProvider theme={theme}>
                                <Stepper activeStep={activeStep} >
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        return (
                                            <Step key={label} {...stepProps} style={{ color: "black" }}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                            </ThemeProvider>
                            <Box align="center" >
                                <Typography align="left" className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                {
                                    [
                                        <React.Fragment>
                                            <UploadPane />
                                            <div>
                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>
                                                <Button variant="outlined" color="secondary" onClick={handleNext} className={classes.button} >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </React.Fragment>
                                        ,
                                        <div>
                                            
                                        </div>,
                                        <div>
                                            <Typography className={classes.instructions}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Button onClick={handleReset} className={classes.button}>
                                                Reset
                                        </Button>
                                        </div>
                                    ][activeStep]
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>

    )

}

