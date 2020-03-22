import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top="1400px" left="1600px" scrollSpeed={16} className={classes.item}>
            <Project id="psgjordan" image={psg} alt="PsgJordan" height="400px">
                <div className={classes.containerImage}>
                    <img src={psg} alt="PsgJordan" />
                </div>
            </Project>
        </CanvasItem>
    )
}