import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import cavani from "./assets/cavani.mp4"

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top={69} left={75} width={36} height={20} scrollSpeed={16} className={classes.item}>
            <video src={cavani} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>

        </CanvasItem>
    )
}