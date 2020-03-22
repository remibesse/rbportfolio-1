import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import Carousel from 'react-bootstrap/Carousel'
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
        <CanvasItem top="450px" left="0px" scrollSpeed={17} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="faces" image={faces} alt="Faces" height="500px">
                <Gallery>
                    <Carousel.Item><img src={faces} alt="Face" /></Carousel.Item>
                    <Carousel.Item><img src={b} alt="Face" /></Carousel.Item>
                    <Carousel.Item><img src={quatro} alt="Quatro" /></Carousel.Item>
                    <Carousel.Item><img src={face} alt="Face" /></Carousel.Item>
                    <Carousel.Item><img src={portrait} alt="Portrait" /></Carousel.Item>
                    <Carousel.Item><img src={duo} alt="Duo" /></Carousel.Item>
                </Gallery>
            </Project>
            <Typography className={classes.title} style={isHover ? { top: "380px", left: "240px", fontSize: "50px" } : { top: "395px", left: "280px" }}>Faces</Typography>
        </CanvasItem>
    )
}

