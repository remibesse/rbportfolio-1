import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import sept from "./assets/sept.jpg";

export default function Sept() {
    const classes = Css()

    return (
        <CanvasItem top="50px" left="1940px" scrollSpeed={15} className={classes.item}>
            <Project id="sept" image={sept} alt="Sept" height="520px">
                <div className={classes.containerImage}>
                    <img src={sept} alt="Sept" />
                </div>
            </Project>
        </CanvasItem>
    )
}

