import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import stylist1 from "./assets/stylist1.jpg";

export default function Stylist1() {
    const classes = Css()

    return (
        <CanvasItem top="630px" left="1840px" scrollSpeed={10} className={classes.item}>
            <Project id="stylist1" image={stylist1} alt="Stylist" height="420px">
                <div className={classes.containerImage}>
                    <img src={stylist1} alt="Stylist" />
                </div>
            </Project>
        </CanvasItem>
    )
}
