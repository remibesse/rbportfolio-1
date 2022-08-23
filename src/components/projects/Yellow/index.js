import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import yellow from "./assets/yellow.jpg"

export default function Yellow() {
    const classes = Css()

    return (
        <CanvasItem top={57} left={47} width={22} scrollSpeed={8} className={classes.item}>
            <Image src={yellow} alt="Yellow" className={classes.cover}/>
        </CanvasItem>
    )
}