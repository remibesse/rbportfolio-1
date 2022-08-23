import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import gato from "./assets/gato.mp4"
import { motion } from "framer-motion"

export default function Gato() {
    const classes = Css()

    return (
        <CanvasItem top={135} left={95} width={29} height={15} scrollSpeed={9} className={classes.item}>
            <motion.video src={gato} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}

