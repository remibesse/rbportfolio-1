import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import red from "./assets/red.jpg"

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top={90} left={62} width={27} scrollSpeed={18} className={classes.cover}>
            <Image src={red} alt="Portrait"/>
        </CanvasItem>
    )
}
