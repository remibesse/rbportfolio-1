import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import blue from "./assets/blue.jpg"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top="70vw" left="-9vw" width="25vw" scrollSpeed={12} className={classes.item}>
            <Project id="blue" image={blue} alt="Blue">
                <div className={classes.containerImage}>
                    <img src={blue} alt="Blue" className={classes.image} />
                </div>
            </Project>
        </CanvasItem>
    )
}