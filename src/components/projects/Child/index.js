import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import child from "./assets/child.jpg"

export default function Child() {
    const classes = Css()

    return (
        <CanvasItem top={30} left={71} width={21} scrollSpeed={8} className={classes.item}>
            <Image src={child} alt="Child" className={classes.cover}/>
        </CanvasItem>
    )
}