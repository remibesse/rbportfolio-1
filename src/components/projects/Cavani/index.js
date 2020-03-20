import React from "react"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

export default function Cavani() {
    const classes = Css()

    return (
        <CanvasItem top="1050px" left="1190px" scrollSpeed={15} className={classes.item}>
            <Popup image={cavani} alt="Cavani" height="320px">
                <div style={{height: "600px"}}>
                    <img src={cavani} alt="Cavani" style={{height: "100%"}} />
                </div>
            </Popup>
        </CanvasItem>
    )
}