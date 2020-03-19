import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import blue from "./assets/blue.jpg"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top="1190px" left="-90px" scrollSpeed={11} className={classes.item}>
            <Popup image={blue} alt="Blue" height="550px">
                <Carousel>
                    <img src={blue} alt="Blue" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}