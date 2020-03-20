import React from "react"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top="1400px" left="1600px" scrollSpeed={15} className={classes.item}>
            <Popup image={psg} alt="PsgJordan" height="400px">
                <div className={classes.containerImage}>
                    <img src={psg} alt="PsgJordan" />
                </div>
            </Popup>
        </CanvasItem>
    )
}