import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import red from "./assets/red.jpg";

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top="1450px" left="1050px" scrollSpeed={17} className={classes.item}>
            <Popup image={red} alt="Portrait" height="500px">
                <Carousel>
                    <img src={red} alt="Portrait" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}
