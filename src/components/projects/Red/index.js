import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import red from "./assets/red.jpg";

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top="1450px" left="1050px" scrollSpeed={18} className={classes.item}>
            <Project id="red" image={red} alt="Portrait" height="500px">
                <div className={classes.containerImage}>
                    <img src={red} alt="Portrait" />
                </div>
            </Project>
        </CanvasItem>
    )
}
