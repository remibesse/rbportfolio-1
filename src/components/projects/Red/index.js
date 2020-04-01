import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import red from "./assets/red.jpg";

export default function Red() {
    const classes = Css()

    return (
        <CanvasItem top={91} left={66} width={26} scrollSpeed={18} className={classes.item}>
            <Project id="red" image={red} alt="Portrait">
                <div className={classes.container}>
                    <img src={red} alt="Portrait" />
                </div>
            </Project>
        </CanvasItem>
    )
}
