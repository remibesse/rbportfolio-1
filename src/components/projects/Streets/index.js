import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import streets from "./assets/streets.jpg"
import streets1 from "./assets/streets1.jpg"
import streets2 from "./assets/streets2.jpg"
import streets3 from "./assets/streets3.jpg"

export default function Streets() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="0px" left="1330px" scrollSpeed={13} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Popup image={streets} alt="Streets" height="400px">
                <Carousel>
                    <div>
                        <img src={streets1} alt="Streets" />
                    </div>
                    <div>
                        <img src={streets2} alt="Streets" />
                    </div>
                    <div>
                        <img src={streets3} alt="Streets" />
                    </div>
                </Carousel>
            </Popup>
            <Typography className={classes.title} style={isHover ? { top: "300px", left: "50px", fontSize: "50px" } : { top: "320px", left: "50px" }}>Streets</Typography>
        </CanvasItem>
    )
}

