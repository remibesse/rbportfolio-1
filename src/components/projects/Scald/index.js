import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import scald from "./assets/scald.mp4"
import { motion } from "framer-motion"

export default function Scald() {
    const classes = Css()

    return (
        <CanvasItem top={180} left={73} width={20} height={20} scrollSpeed={9} className={classes.item}>
            <motion.video src={scald} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}

