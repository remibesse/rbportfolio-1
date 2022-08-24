import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import city from "./assets/city.jpg"

export default function City() {
    const classes = Css()

    return (
        <CanvasItem top={135} left={97} width={21} scrollSpeed={10} className={classes.item}>
            <Image src={city} alt="City" className={classes.cover}/>
        </CanvasItem>
    )
}