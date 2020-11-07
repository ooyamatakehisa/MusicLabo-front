import React, { useState } from 'react';
import { Box, Paper, Button, Typography } from '@material-ui/core/';
import css from 'css/kanaFont.module.css';
import { Link } from 'react-router-dom';
import UploadedFilePane from 'component/Separation/UploadedFilePane';

const styles = {
   
    image :{
        opacity: "0.2",
    },
  
}


export default function UploadPane() {
    const [isUploaded, setIsUploaded] = useState(false);
    const [file, setFile] = useState(null);
    const handleUpload =() => {
        const uploadElement = document.getElementById("uploadbutton");
        uploadElement.click();
    };
    
    const handleChangeFile = (e) => {
        setIsUploaded(true);
        const target = e.target;
        const fileItem = target.files.item(0);
        setFile(fileItem);
    }

    return (
        <React.Fragment>
            <Box height="40vh" width="38vw" py="5vh" position="relative" align="center" className={css.shadow} onClick={handleUpload}>
                <span className={css.label}>Drop files here or click to upload.</span>
                <img src={`${process.env.PUBLIC_URL}/separation.png`} alt="arrange" height="100%" width="100%" style={styles.image}/>
                <input type="file" id="uploadbutton" accept="audio/*" hidden onChange={(e) => handleChangeFile(e)} />
            </Box>
            { isUploaded && <UploadedFilePane fileInfo={ file }/> }
        </React.Fragment>
    )
}