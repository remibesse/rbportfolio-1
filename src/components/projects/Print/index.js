import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import print from "./assets/print.jpg";
import Image from "../../Image";

export default function Print() {
    const classes = Css()

    return (
        <CanvasItem top={21} left={129} width={22} scrollSpeed={17} className={classes.item}>
            <Image src={print} alt="Print" className={classes.cover}/>
        </CanvasItem>
    )
}