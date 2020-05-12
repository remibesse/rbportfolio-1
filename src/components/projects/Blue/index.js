import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image";
import Css from "../Css.js"
import blue from "./assets/blue.jpg"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top={73} left={3} width={25} scrollSpeed={12} className={classes.item}>
            <Image src={blue} alt="Blue" className={classes.cover}/>
        </CanvasItem>
    )
}