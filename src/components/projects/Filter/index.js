import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import filter from "./assets/filter.mp4"
import { motion } from "framer-motion"

export default function Filter() {
    const classes = Css()

    return (
        <CanvasItem top={25} left={43} width={20} height={26} scrollSpeed={7} className={classes.item}>
            <motion.video src={filter} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}