import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import b from "./assets/b.jpg"
import duo from "./assets/duo.jpg"
import face from "./assets/face.jpg"
import portrait from "./assets/portrait.jpg"
import quatro from "./assets/quatro.jpg"
import faces from "./assets/faces.jpg"

export default function Faces() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="450px" left="0px" scrollSpeed={16} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Popup image={faces} alt="Faces" height="500px">
                <Carousel>
                    <img src={faces} alt="Face" />
                    <img src={b} alt="Face" />
                    <img src={quatro} alt="Quatro" />
                    <img src={face} alt="Face" />
                    <img src={portrait} alt="Portrait" />
                    <img src={duo} alt="Duo" />
                </Carousel>
            </Popup>
            <Typography className={classes.title} style={isHover ? { top: "380px", left: "240px", fontSize: "50px" } : { top: "395px", left: "280px" }}>Faces</Typography>
        </CanvasItem>
    )
}

