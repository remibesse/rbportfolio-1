import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import koba from "./assets/koba.jpg"

export default function Koba() {
    const classes = Css()

    return (
        <CanvasItem top={172} left={33} width={24} scrollSpeed={15} className={classes.item}>
            <Image src={koba} alt="Koba" className={classes.cover}/>
        </CanvasItem>
    )
}