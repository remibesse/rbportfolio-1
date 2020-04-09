import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()

    return (
        <CanvasItem top={88} left={93} width={27} scrollSpeed={16} className={classes.item}>
            <Project id="psgjordan" image={psg} alt="PsgJordan">
                <div className={classes.portraitFormat}>
                    <img src={psg} alt="PsgJordan" />
                </div>
            </Project>
        </CanvasItem>
    )
}