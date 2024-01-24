import React, { useRef } from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import gato from "./assets/gato.mp4"
import { motion } from "framer-motion"
import { useVideoPlayback } from "../../../hook/useVideoPlayback"

export default function Gato() {
    const classes = Css()
    const videoRef = useRef(null)
    useVideoPlayback(videoRef);

    return (
        <CanvasItem top={108} left={90} width={27} height={15} scrollSpeed={9} className={classes.item}>
            <motion.video ref={videoRef} src={gato} type="video/mp4" loop playsInline className={`${classes.video} ${classes.cover}`} />
        </CanvasItem>
    );
};





