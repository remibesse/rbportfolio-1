import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import nike from "./assets/nike.jpg"

export default function Nike() {
    const classes = Css()

    return (
        <CanvasItem top={0} left={15} width={20} scrollSpeed={18} className={classes.item}>
            <Image src={nike} alt="Nike" className={classes.cover}/>
        </CanvasItem>
    )
}