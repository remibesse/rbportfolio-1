import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import blue from "./assets/blue.jpg"

export default function Blue() {
    const classes = Css()

    return (
        <CanvasItem top={73} left={3} width={25} scrollSpeed={12} className={classes.item}>
            <Project id="blue" image={blue} alt="Blue">
                <div className={classes.portraitFormat}>
                    <img src={blue} alt="Blue" loading="lazy"/>
                </div>
            </Project>
        </CanvasItem>
    )
}