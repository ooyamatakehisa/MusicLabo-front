import React from 'react';
import { Box, Paper, Button, Typography } from '@material-ui/core/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons'
import css from 'css/kanaFont.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const styles = {

    image: {
        opacity: "0.2",
    },
}



export default function UploadedFilePane(props) {
    const [duration, setDuration] = useState("");
    const calculateAudioDuration = (file) => {
        const audio = document.createElement('audio');
        var fileURL = URL.createObjectURL(file);
        audio.src = fileURL;
        audio.controls = true;
        audio.load();
    
        audio.onloadeddata = () => {
            const duration = parseInt(audio.duration) ;
            const min = String(parseInt(duration / 60));
            const sec = String(duration % 60);
            setDuration(min + ":" + sec);
        }
    }
    
    calculateAudioDuration(props.fileInfo);

    return (
        <Box height="100%" p={3} justifyContent="center" alignItems="center" display="flex" className={css.subTitle}>
            <FontAwesomeIcon icon={faFileAudio} size="2x" />
            <Box px={1}>{props.fileInfo.name} - {duration}</Box>
            <Box></Box>
        </Box>
    )
}