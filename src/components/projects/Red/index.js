import React from "react"
import CanvasItem from "../../CanvasItem"
import Css from "../Css.js"
import red from "./assets/red.jpg";
import Image from "../../Image";

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top={90} left={62} width={27} scrollSpeed={18} className={classes.item}>
            <Image src={red} alt="Portrait" className={classes.cover}/>
        </CanvasItem>
    )
}
