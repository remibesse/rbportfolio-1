import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import gradient from "./assets/gradient.jpg"

export default function Gradient() {
    const classes = Css()

    return (
        <CanvasItem top={34} left={12} width={19} scrollSpeed={8} className={classes.item}>
            <Image src={gradient} alt="Gradient" className={classes.cover}/>
        </CanvasItem>
    )
}