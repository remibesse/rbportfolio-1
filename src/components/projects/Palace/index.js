import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import palace from "./assets/palace.jpg"

export default function Child() {
    const classes = Css()

    return (
        <CanvasItem top={100} left={39} width={27} scrollSpeed={8} className={classes.item}>
            <Image src={palace} alt="Palace" className={classes.cover}/>
        </CanvasItem>
    )
}