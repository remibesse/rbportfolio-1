import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"
import Image from "../../Image";

export default function PsgJordan() {
    const classes = Css()
    return (
        <CanvasItem top={88} left={93} width={27} scrollSpeed={16} className={classes.item}>
            <Image src={psg} alt="Psg Jordan" className={classes.cover}/>
        </CanvasItem>
    )
}