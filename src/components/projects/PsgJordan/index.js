import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top="1400px" left="1600px" scrollSpeed={15} className={classes.item}>
            <Popup image={psg} alt="PsgJordan" height="400px">
                <Carousel>
                    <img src={psg} alt="PsgJordan" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}