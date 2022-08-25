import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import intro from "./assets/intro.mp4"
import { motion } from "framer-motion"

export default function Intro() {
    const classes = Css()

    return (
        <CanvasItem top={116} left={0} width={23} height={14} scrollSpeed={9} className={classes.item}>
            <motion.video src={intro} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}

