import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import stylist1 from "./assets/stylist1.jpg"

export default function Stylist1() {
    const classes = Css()

    return (
        <CanvasItem top={54} left={116} width={23} scrollSpeed={10} className={classes.item}>
            <Image src={stylist1} alt="Stylist" className={classes.cover}/>
        </CanvasItem>
    )
}
