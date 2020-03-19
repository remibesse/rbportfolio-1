import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top="1060px" left="180px" scrollSpeed={11} className={classes.item}>
            <Popup image={vimsml} alt="Vimsml" height="380px">
                <Carousel>
                    <img src={vimsml} alt="Vimsml" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}