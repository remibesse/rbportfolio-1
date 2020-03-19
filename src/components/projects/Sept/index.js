import React from "react"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import sept from "./assets/sept.jpg";

export default function Sept() {
    const classes = Css()

    return (
        <CanvasItem top="50px" left="1940px" scrollSpeed={14} className={classes.item}>
            <Popup image={sept} alt="Sept" height="520px">
                <Carousel>
                    <img src={sept} alt="Sept" />
                </Carousel>
            </Popup>
        </CanvasItem>
    )
}

