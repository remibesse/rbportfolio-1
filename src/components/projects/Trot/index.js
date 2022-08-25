import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import trot from "./assets/trot.jpg"

export default function Trot() {
    const classes = Css()

    return (
        <CanvasItem top={170} left={40} width={21} scrollSpeed={6} className={classes.item}>
            <Image src={trot} alt="Street" className={classes.cover} style={{zIndex: 10}}/>
        </CanvasItem>
    )
}