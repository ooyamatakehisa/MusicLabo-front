import React from 'react';
import { Box, Grid, Button } from '@material-ui/core/';
import css from 'css/kanaFont.module.css';
import { Link } from 'react-router-dom';

const style = {

    secondPage: {
        height: "32vw",
        backgroundColor: "#DED3D341",
        textAlign: "left"
    }
}


export default function SeparationPane() {
    return (
        <div style={style.secondPage} id="here">
            <Grid container style={{ padding:"7vw 10%", width:"100%",height:"100%" }}>
                <Grid item xs={6} style={{ padding:"15px 0px" }}>
                    <Box py="auto" pr={3} height="100%" position="relative">
                        <span className={css.separationPane1}> 01.</span>
                        <span className={css.separationPane2}> SEPARATION</span>
                        <Box pt={2} className={css.subTitle}>
                            Analyzes uploaded audio files and separates them into separate audio files for each instrument and outputs them.
                            This feature is useful, for example, when copying parts of an instrument that cannot be heard clearl as ay, such bass guitars.
                        </Box>
                        <Box bottom="0px" right="10%" position="absolute">
                            <Link to="/separation" style={{textDecoration:"none"}}>
                                <Button variant="outlined" color="secondary" style={{ width: "130px" }} >
                                    Start
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "center", height:"100%"}}>
                    <Box pl={4} style={{ width:"100%", height:"100%" }}>
                        <img src={`${process.env.PUBLIC_URL}/separation.png`} alt="Logo" style={{ width: "35vw", height: "100%" }} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )

}

