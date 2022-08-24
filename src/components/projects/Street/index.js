import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import streets3 from "../Streets/assets/streets3.jpg"

export default function Street1() {
    const classes = Css()

    return (
        <CanvasItem top={124} left={74} width={24} scrollSpeed={8} className={classes.item}>
            <Image src={streets3} alt="Streets" className={classes.cover}/>
        </CanvasItem>
    )
}