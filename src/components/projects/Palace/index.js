import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import palace from "./assets/palace.jpg"

export default function Child() {
    const classes = Css()

    return (
        <CanvasItem top={82} left={40} width={23} scrollSpeed={8} className={classes.item}>
            <Image src={palace} alt="Palace" className={classes.cover}/>
        </CanvasItem>
    )
}