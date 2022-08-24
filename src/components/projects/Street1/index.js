import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import street from "../Streets/assets/streets.jpg"

export default function Street() {
    const classes = Css()

    return (
        <CanvasItem top={84} left={12} width={22} scrollSpeed={8} className={classes.item}>
            <Image src={street} alt="Streets" className={classes.cover}/>
        </CanvasItem>
    )
}