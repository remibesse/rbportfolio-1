import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import sept from "./assets/sept.jpg";

export default function Sept() {
    const classes = Css()

    return (
        <CanvasItem top="5vw" left="109vw" width="21vw" scrollSpeed={15} className={classes.item}>
            <Project id="sept" image={sept} alt="Sept">
                <div className={classes.containerImage}>
                    <img src={sept} alt="Sept" />
                </div>
            </Project>
        </CanvasItem>
    )
}
