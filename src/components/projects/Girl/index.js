import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import girl from "./assets/girl.jpg"

export default function Girl() {
    const classes = Css()

    return (
        <CanvasItem top={152} left={16} width={22} scrollSpeed={15} className={classes.item}>
            <Image src={girl} alt="Girl" className={classes.cover}/>
        </CanvasItem>
    )
}