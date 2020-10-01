import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import we from "./assets/we.jpg"

export default function We() {
    const classes = Css()

    return (
        <CanvasItem top={138} left={138} width={20} scrollSpeed={20} className={classes.item}>
            <Image src={we} alt="We" className={classes.cover}/>
        </CanvasItem>
    )
}