import React, {useEffect, useRef} from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import intro from "./assets/intro.mp4"
import { motion } from "framer-motion"
import { useVideoPlayback } from "../../../hook/useVideoPlayback"

export default function Intro() {
    const classes = Css()
    const videoRef = useRef(null)
    useVideoPlayback(videoRef);
    
    return (
        <CanvasItem top={116} left={0} width={23} height={14} scrollSpeed={9} className={classes.item}>
            <motion.video ref={videoRef} src={intro} type="video/mp4" playsInline loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    );
};


