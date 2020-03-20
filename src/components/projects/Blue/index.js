import React from "react"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import blue from "./assets/blue.jpg"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top="1190px" left="-90px" scrollSpeed={11} className={classes.item}>
            <Popup image={blue} alt="Blue" height="550px">
                <div className={classes.containerImage}>
                    <img src={blue} alt="Blue" className={classes.image} />
                </div>
            </Popup>
        </CanvasItem>
    )
}