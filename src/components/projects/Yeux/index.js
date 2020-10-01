import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import yeux from "./assets/yeux.jpg"

export default function Yeux() {
    const classes = Css()

    return (
        <CanvasItem top={133} left={98} width={18} scrollSpeed={18} className={classes.item}>
            <Image src={yeux} alt="Yeux" className={classes.cover}/>
        </CanvasItem>
    )
}
