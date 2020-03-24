import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import Carousel from 'react-bootstrap/Carousel'
import Css from "../Css.js"
import streets from "./assets/streets.jpg"
import streets1 from "./assets/streets1.jpg"
import streets2 from "./assets/streets2.jpg"
import streets3 from "./assets/streets3.jpg"

export default function Streets() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="0px" left="1330px" scrollSpeed={14} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="streets" image={streets} alt="Streets" height="400px">
                <Gallery>
                    <Carousel.Item><img src={streets} alt="Streets" /></Carousel.Item>
                    <Carousel.Item><img src={streets1} alt="Streets" /></Carousel.Item>
                    <Carousel.Item><img src={streets2} alt="Streets" /></Carousel.Item>
                    <Carousel.Item><img src={streets3} alt="Streets" /></Carousel.Item>
                </Gallery>
            </Project>
            <Typography className={classes.titleItem} style={isHover ? { top: "300px", left: "35px", fontSize: "50px" } : { top: "320px", left: "50px" }}>Streets</Typography>
        </CanvasItem>
    )
}

