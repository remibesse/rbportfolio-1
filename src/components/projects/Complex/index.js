import React, { useRef } from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import complex from "./assets/complex.mp4"
import { motion } from "framer-motion"
import { useVideoPlayback } from "../../../hook/useVideoPlayback"

export default function Complex() {
    const classes = Css()
    const videoRef = useRef(null)
    useVideoPlayback(videoRef);

    return (
        <CanvasItem top={154} left={79} width={15} height={20} scrollSpeed={9} className={classes.item}>
            <motion.video ref={videoRef} src={complex} loop playsInline type="video/mp4" className={classes.video}/>
        </CanvasItem>
    )
}

