import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import red from "./assets/red.jpg";

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top="90vw" left="57vw" width="26vw" scrollSpeed={18} className={classes.item}>
            <Project id="red" image={red} alt="Portrait">
                <div className={classes.containerImage}>
                    <img src={red} alt="Portrait" />
                </div>
            </Project>
        </CanvasItem>
    )
}
