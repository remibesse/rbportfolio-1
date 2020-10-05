import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import girl from "./assets/girl.jpg"

export default function Girl() {
    const classes = Css()

    return (
        <CanvasItem top={119} left={8} width={22} scrollSpeed={13} className={classes.item}>
            <Image src={girl} alt="Girl" className={classes.cover}/>
        </CanvasItem>
    )
}