import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top={133} left={40} width={30} scrollSpeed={10} className={classes.item}>
            <Image src={vimsml} alt="Vimsml" className={classes.cover}/>
        </CanvasItem>
    )
}