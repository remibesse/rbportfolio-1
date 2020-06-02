import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import ofr from "./assets/ofr.mp4"

export default function Ofr() {
    const classes = Css()

    return (
        <CanvasItem top={152} left={57} width={27} height={16} scrollSpeed={10} className={classes.item}>
            <video src={ofr} type="video/mp4" autoPlay muted loop className={`${classes.video} ${classes.cover}`}/>
        </CanvasItem>
    )
}