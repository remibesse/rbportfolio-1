import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import vladimir from "./assets/vladimir.jpg"

export default function Vladimir() {
    const classes = Css()

    return (
        <CanvasItem top={3} left={40} width={27} scrollSpeed={18} className={classes.item}>
            <Image src={vladimir} alt="Vladimir" className={classes.cover}/>
        </CanvasItem>
    )
}