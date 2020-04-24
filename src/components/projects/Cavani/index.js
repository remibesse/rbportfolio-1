import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"
import Image from "../../Image";

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top={66} left={70} width={36} scrollSpeed={16} className={classes.item}>
            <Image src={cavani} alt="Cavani" className={classes.cover}/>
        </CanvasItem>
    )
}