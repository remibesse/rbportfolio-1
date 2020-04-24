import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import stylist1 from "./assets/stylist1.jpg";
import Image from "../../Image";

export default function Stylist1() {
    const classes = Css()

    return (
        <CanvasItem top={39} left={108} width={23} scrollSpeed={10} className={classes.item}>
            <Image src={stylist1} alt="Stylist" className={classes.cover}/>
        </CanvasItem>
    )
}
