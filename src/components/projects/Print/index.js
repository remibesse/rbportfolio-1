import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import print from "./assets/print.jpg";

export default function Print() {
    const classes = Css()

    return (
        <CanvasItem top={22} left={133} width={22} scrollSpeed={18} className={classes.item}>
            <Project id="print" image={print} alt="Print">
                <div className={classes.containerImage}>
                    <img src={print} alt="Print" />
                </div>
            </Project>
        </CanvasItem>
    )
}