import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top="1060px" left="180px" scrollSpeed={12} className={classes.item}>
            <Project id="vimsml" image={vimsml} alt="Vimsml" height="380px">
                <div style={{height: "700px"}}>
                    <img src={vimsml} alt="Vimsml" style={{height: "100%"}} />
                </div>
            </Project>
        </CanvasItem>
    )
}