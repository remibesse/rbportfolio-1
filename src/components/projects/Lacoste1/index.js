import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import lacoste from "./assets/lacoste.jpg"

export default function Child() {
    const classes = Css()

    return (
        <CanvasItem top={192} left={69} width={21} scrollSpeed={8} className={classes.item}>
            <Image src={lacoste} alt="Lacoste" className={classes.cover}/>
        </CanvasItem>
    )
}