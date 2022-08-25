import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import lacoste from "./assets/lacoste.jpeg"

export default function Lacoste1() {
    const classes = Css()

    return (
        <CanvasItem top={166} left={90} width={22} scrollSpeed={8} className={classes.item}>
            <Image src={lacoste} alt="Lacoste" className={classes.cover}/>
        </CanvasItem>
    )
}