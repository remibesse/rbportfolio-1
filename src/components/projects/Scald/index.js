import React, {useRef, useEffect} from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import scald from "./assets/scald.mp4"
import { motion } from "framer-motion"
import { useVideoPlayback } from "../../../hook/useVideoPlayback"

export default function Scald() {
    const classes = Css()
    const videoRef = useRef(null)
    useVideoPlayback(videoRef);

    return (
        <CanvasItem top={180} left={73} width={22} height={22} scrollSpeed={9} className={classes.item}>
            <motion.video ref={videoRef} src={scald} loop playsInline type="video/mp4" className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    );
};

