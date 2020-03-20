import React from "react"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import stylist1 from "./assets/stylist1.jpg";

export default function Stylist1() {
    const classes = Css()

    return (
        <CanvasItem top="630px" left="1840px" scrollSpeed={17} className={classes.item}>
            <Popup image={stylist1} alt="Stylist" height="420px">
                <div className={classes.containerImage}>
                    <img src={stylist1} alt="Stylist" />
                </div>
            </Popup>
        </CanvasItem>
    )
}
