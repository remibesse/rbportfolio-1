import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top={67} left={70} width={36} scrollSpeed={16} className={classes.item}>
            <Project id="cavani" image={cavani} alt="Cavani">
                <div className={classes.landscapeFormat}>
                    <img src={cavani} alt="Cavani"/>
                </div>
            </Project>
        </CanvasItem>
    )
}