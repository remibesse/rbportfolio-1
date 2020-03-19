import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import fuck from "./assets/fuck.jpg"
import dimanche from "./assets/dimanche.jpg"
import giveafuck from "./assets/giveafuck.jpg"

export default function Giveafuck() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="580px" left="1350px" scrollSpeed={13} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Popup image={giveafuck} alt="Give a fuck" height="420px">
                <Carousel>
                    <img src={giveafuck} alt="Give a fuck" />
                    <img src={dimanche} alt="Give a fuck" />
                    <img src={fuck} alt="Share more consume less" />
                </Carousel>
            </Popup>
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "280px", left: "25px" } : { top: "300px", left: "24px" }}>Give</Typography>
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "330px", left: "25px" } : { top: "327px", left: "25px" }}>a fuck</Typography>
        </CanvasItem>
    )
}

