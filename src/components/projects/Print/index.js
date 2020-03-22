import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import print from "./assets/print.jpg";

export default function Print() {
    const classes = Css()

    return (
        <CanvasItem top="350px" left="2200px" scrollSpeed={15} className={classes.item}>
            <Project id="print" image={print} alt="Print" height="430px">
                <div className={classes.containerImage}>
                    <img src={print} alt="Print" />
                </div>
            </Project>
        </CanvasItem>
    )
}