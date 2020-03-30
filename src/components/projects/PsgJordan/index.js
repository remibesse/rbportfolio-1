import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top={89} left={97} width={26} scrollSpeed={16} className={classes.item}>
            <Project id="psgjordan" image={psg} alt="PsgJordan">
                <div className={classes.containerImage}>
                    <img src={psg} alt="PsgJordan" />
                </div>
            </Project>
        </CanvasItem>
    )
}