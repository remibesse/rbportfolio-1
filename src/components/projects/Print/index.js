import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import print from "./assets/print.jpg"

export default function Print() {
    const classes = Css()

    return (
        <CanvasItem top={21} left={129} width={22} scrollSpeed={17} className={classes.cover}>
            <Image src={print} alt="Print"/>
        </CanvasItem>
    )
}