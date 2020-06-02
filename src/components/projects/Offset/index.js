import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import offset from "./assets/offset.mp4"

export default function Offset() {
    const classes = Css()

    return (
        <CanvasItem top={112} left={11} width={21} height={21} scrollSpeed={16} className={classes.item}>
            <video src={offset} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}