import React from "react"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import stylist from "./assets/stylist2.jpg";

export default function Stylist2() {
    const classes = Css()

    return (
        <CanvasItem top="1500px" left="2150px" scrollSpeed={16} className={classes.item}>
            <Popup image={stylist} alt="Stylist" height="450px">
                <div className={classes.containerImage}>
                    <img src={stylist} alt="Stylist" />
                </div>
            </Popup>
        </CanvasItem>
    )
}
