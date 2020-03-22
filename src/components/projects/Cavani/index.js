import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top="1050px" left="1190px" scrollSpeed={16} className={classes.item}>
            <Project id="cavani" image={cavani} alt="Cavani" height="320px">
                <div style={{height: "570px"}}>
                    <img src={cavani} alt="Cavani" style={{height: "100%"}} />
                </div>
            </Project>
        </CanvasItem>
    )
}