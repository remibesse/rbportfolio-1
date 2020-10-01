import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import ichon from "./assets/ichon.jpg"

export default function Collage() {
    const classes = Css()

    return (
        <CanvasItem top={154} left={89} width={17} scrollSpeed={11} className={classes.item}>
            <Image src={ichon} alt="Ichon" className={classes.cover}/>
        </CanvasItem>
    )
}