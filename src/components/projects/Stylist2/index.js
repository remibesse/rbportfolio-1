import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import stylist from "./assets/stylist2.jpg";

export default function Stylist2() {
    const classes = Css()

    return (
        <CanvasItem top={95} left={129} width={20} scrollSpeed={17} className={classes.item}>
            <Project id="stylist2" image={stylist} alt="Stylist" >
                <div className={classes.container}>
                    <img src={stylist} alt="Stylist" />
                </div>
            </Project>
        </CanvasItem>
    )
}
