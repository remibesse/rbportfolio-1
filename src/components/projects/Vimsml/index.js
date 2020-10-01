import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import vimsml from "./assets/vimsml.jpg"

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top={71} left={11} width={34} scrollSpeed={12} className={classes.item}>
            <Image src={vimsml} alt="Vimsml" className={classes.cover}/>
        </CanvasItem>
    )
}