import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import stylist from "./assets/stylist2.jpg";

export default function Stylist2() {
    const classes = Css()

    return (
        <CanvasItem top="93vw" left="120vw" width="20vw" scrollSpeed={17} className={classes.item}>
            <Project id="stylist2" image={stylist} alt="Stylist" >
                <div className={classes.containerImage}>
                    <img src={stylist} alt="Stylist" />
                </div>
            </Project>
        </CanvasItem>
    )
}
