import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import portrait from "./assets/portrait.jpg"

export default function SelfPortrait() {
    const classes = Css()

    return (
        <CanvasItem top={181} left={20} width={18} scrollSpeed={12} className={classes.item}>
            <Image src={portrait} alt="Portrait" className={classes.cover}/>
        </CanvasItem>
    )
}