import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import koba from "./assets/koba.jpg"

export default function Koba() {
    const classes = Css()

    return (
        <CanvasItem top={167} left={33} width={23} scrollSpeed={10} className={classes.item}>
            <Image src={koba} alt="Koba" className={classes.cover}/>
        </CanvasItem>
    )
}