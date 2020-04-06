import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import sept from "./assets/sept.jpg"

export default function Sept() {
    const classes = Css()

    return (
        <CanvasItem top={4} left={112} width={21} scrollSpeed={15} className={classes.item}>
            <Project id="sept" image={sept} alt="Sept">
                <div className={classes.portraitFormat}>
                    <img src={sept} alt="Sept" loading="lazy" />
                </div>
            </Project>
        </CanvasItem>
    )
}
