import React from "react"
import Css from "../Css.js"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import stylist from "./assets/stylist2.jpg"


export default function Stylist2() {
    const classes = Css()

    return (
        <CanvasItem top={93} left={125} width={20} scrollSpeed={17} className={classes.item}>
            <Image src={stylist} alt="Stylist" className={classes.cover}/>
        </CanvasItem>
    )
}
