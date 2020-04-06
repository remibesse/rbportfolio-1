import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top={56} left={11} width={34} scrollSpeed={12} className={classes.item}>
            <Project id="vimsml" image={vimsml} alt="Vimsml">
                <div className={classes.landscapeFormat}>
                    <img src={vimsml} alt="Vimsml" loading="lazy"/>
                </div>
            </Project>
        </CanvasItem>
    )
}