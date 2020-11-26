import React from 'react';
import { Box, Grid, Button, Typography } from '@material-ui/core/';
import css from 'css/kanaFont.module.css';
import { Link } from 'react-router-dom';


export default function ArrangePane() {
    return (
        <Typography
            component="div"
            variant="body1"
            style={{ height: "30vw", width: '100%', position: 'relative' }}
        >
            <Grid container style={{ textAlign: "left", position: "absolute", zIndex: "1800", padding: "7vw 10vw", height: "100%" }} >
                <Grid item xs={6} style={{height:"100%"}}>
                    <Box position="relative" height="100%">
                        <span className={css.separationPane1}> 03.</span>
                        <span className={css.separationPane2}> Time Stretch</span>
                        <Box pt={2} pr={3} className={css.subTitle} >
                            Analyzes uploaded audio files and separates them into separate audio files for each instrument and outputs them.
                            This feature is useful, for example, when copying parts of an instrument that cannot be heard clearl as
                        </Box>

                        <Box position="absolute" bottom="0px">
                            <Link to="/arrange" style={{ textDecoration: "none" }}>
                                <Button variant="outlined" color="secondary" style={{ width: "130px" }} >
                                    Start
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ height: "100%" }} align="center">
                    <Box pl={5} height="100%">
                        <img src={`${process.env.PUBLIC_URL}/arrange.png`} alt="arrange" height="100%" width="100%" />
                    </Box>
                </Grid>
            </Grid>
 
            <Box position="absolute" top={0} left="25%" style={{ height: "30vw", width: "75%", backgroundColor: "#F2F2F2", zIndex: "0" }}></Box>
        </Typography>
    );
}