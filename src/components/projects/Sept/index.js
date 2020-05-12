import React from "react"
import Css from "../Css.js"
import sept from "./assets/sept.jpg"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image";

export default function Sept() {
    const classes = Css()

    return (
        <CanvasItem top={4} left={112} width={21} scrollSpeed={15} className={classes.item}>
            <Image src={sept} alt="Sept" className={classes.cover}/>
        </CanvasItem>
    )
}
