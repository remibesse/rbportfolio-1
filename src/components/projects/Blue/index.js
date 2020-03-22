import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import blue from "./assets/blue.jpg"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top="1190px" left="-90px" scrollSpeed={12} className={classes.item}>
            <Project id="blue" image={blue} alt="Blue" height="550px">
                <div className={classes.containerImage}>
                    <img src={blue} alt="Blue" className={classes.image} />
                </div>
            </Project>
        </CanvasItem>
    )
}