import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import koba from "./assets/koba.jpg"

export default function Koba() {
    const classes = Css()

    return (
        <CanvasItem top={156} left={50} width={21} scrollSpeed={10} className={classes.item}>
            <Image src={koba} alt="Koba" className={classes.cover}/>
        </CanvasItem>
    )
}