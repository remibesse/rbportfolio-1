import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import stylist from "./assets/stylist2.jpg";
import Image from "../../Image";

export default function Stylist2() {
    const classes = Css()

    return (
        <CanvasItem top={93} left={125} width={20} scrollSpeed={17} className={classes.item}>
            <Image src={stylist} alt="Stylist" className={classes.cover}/>
        </CanvasItem>
    )
}
