import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import blue from "./assets/blue.mp4"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top={73} left={0} width={31} height={24} scrollSpeed={8} className={classes.item}>
            <video src={blue} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}