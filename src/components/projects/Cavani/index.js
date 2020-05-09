import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image";
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top={66} left={70} width={36} scrollSpeed={16} className={classes.cover}>
            <Image src={cavani} alt="Cavani"/>
        </CanvasItem>
    )
}