import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import oboy1 from "./assets/oboy1.jpg"

export default function Portrait() {
    const classes = Css()

    return (
        <CanvasItem top={107} left={51} width={18} scrollSpeed={8} className={classes.item}>
            <Image src={oboy1} alt="Oboy" className={classes.cover}/>
        </CanvasItem>
    )
}