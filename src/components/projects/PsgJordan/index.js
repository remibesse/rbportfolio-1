import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top={106} left={93} width={27} scrollSpeed={16} className={classes.item}>
            <Image src={psg} alt="Psg Jordan" className={classes.cover}/>
        </CanvasItem>
    )
}