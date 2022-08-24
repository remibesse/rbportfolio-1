import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import intro2 from "./assets/intro.mp4"
import { motion } from "framer-motion"

export default function Intro() {
    const classes = Css()

    return (
        <CanvasItem top={0} left={90} width={20} height={15} scrollSpeed={9} className={classes.item}>
            <motion.video src={intro2} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}

