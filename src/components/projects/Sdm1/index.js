import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import sdm from "../Sdm/assets/sdm.jpg"

export default function Sdm1() {
    const classes = Css()

    return (
        <CanvasItem top={152} left={15} width={21} scrollSpeed={6} className={classes.item}>
            <Image src={sdm} alt="SDM" className={classes.cover}/>
        </CanvasItem>
    )
}