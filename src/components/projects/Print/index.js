import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import print from "./assets/print.jpg";

export default function Print() {
    const classes = Css()

    return (
        <CanvasItem top="350px" left="2200px" scrollSpeed={15} className={classes.item}>
            <Popup image={print} alt="Print" height="430px">
                <Carousel>
                    <img src={print} alt="Print" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}