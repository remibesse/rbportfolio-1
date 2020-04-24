import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"
import Image from "../../Image";

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top={56} left={11} width={34} scrollSpeed={12} className={classes.item}>
            <Image src={vimsml} alt="Vimsml" className={classes.cover}/>
        </CanvasItem>
    )
}