import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top="1050px" left="1190px" scrollSpeed={15} className={classes.item}>
            <Popup image={cavani} alt="Cavini" height="320px">
                <Carousel>
                    <img src={cavani} alt="Cavini" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}