import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import collage from "./assets/collage.jpg"

export default function Collage() {
    const classes = Css()

    return (
        <CanvasItem top={77} left={53} width={19} scrollSpeed={10} className={classes.item}>
            <Image src={collage} alt="Collage" className={classes.cover}/>
        </CanvasItem>
    )
}