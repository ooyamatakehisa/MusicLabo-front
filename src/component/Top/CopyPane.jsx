import React from 'react';
import { Box, Grid, Button } from '@material-ui/core/';
import css from 'css/kanaFont.module.css';
import { Link } from 'react-router-dom';

const style = {

    secondPage: {
        height: "32vw",
        backgroundColor: "white",
        textAlign: "left"
    }
}



export default function CopyPane() {
    return (
        <div style={style.secondPage} id="here">
            <Grid container style={{ paddingTop:"11vh", paddingBottom:"11vh", height:"100%"}}>
                <Grid item xs={6} style={{height:"100%"}}>
                    <img src={`${process.env.PUBLIC_URL}/copy.png`} alt="Logo" style={{ width: "100%", height: "100%" }} />
                </Grid>
                <Grid item xs={6} style={{ height:"100%", width:"100%", padding:"15px 0px"}} >
                    <Box pl={10} pr={14}  position="relative" height="100%">
                        <span className={css.separationPane1}> 02.</span>
                        <span className={css.separationPane2}> COPY</span>
                        <Box pt={2} pl={3} className={css.subTitle}>
                            Analyzes uploaded audio files and separates them into separate audio files for each instrument and outputs them.
                            This feature is useful, for example, when copying parts of an instrument that cannot be heard clearl as ay, such bass guitars.
                        </Box>
                        
                        <Box bottom="0px" position="absolute">
                            <Link to="/copy" style={{textDecoration:"none"}}>
                                <Button variant="outlined" color="secondary" style={{ width: "130px" }} >
                                    Start
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )

}

