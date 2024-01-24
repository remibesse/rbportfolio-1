import React, { useRef } from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import sdm from "./assets/sdm.mp4"
import { motion } from "framer-motion"
import { useVideoPlayback } from "../../../hook/useVideoPlayback"

export default function Sdm() {
    const classes = Css();
    const videoRef = useRef(null);
    useVideoPlayback(videoRef);

    return (
        <CanvasItem top={155} left={10} width={20} height={30} scrollSpeed={9} className={classes.item}>
            <motion.video ref={videoRef} src={sdm} autoPlay muted loop playsInline type="video/mp4" className={`${classes.video} ${classes.cover}`} />
        </CanvasItem>
    );
};
