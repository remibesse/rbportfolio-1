import React, { useState } from "react"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import Carousel from 'react-bootstrap/Carousel'
import Css from "../Css.js"
import fuck from "./assets/fuck.jpg"
import dimanche from "./assets/dimanche.jpg"
import giveafuck from "./assets/giveafuck.jpg"

export default function Giveafuck() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top={38} left={81} width={25} scrollSpeed={14} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="giveafuck" image={giveafuck} alt="Give a fuck">
                <Gallery>
                    <Carousel.Item><img src={giveafuck} alt="Give a fuck" /></Carousel.Item>
                    <Carousel.Item><img src={dimanche} alt="Give a fuck" /></Carousel.Item>
                    <Carousel.Item><img src={fuck} alt="Share more consume less" /></Carousel.Item>
                </Gallery>
            </Project>
            <Typography className={classes.titleItem} style={isHover ? { top: "66%", left: "6%", fontSize: "280%",  } : { top: "68%", left: "6%" }}>Give</Typography>
            <Typography className={classes.titleItem} style={isHover ? { top: "76%", left: "6%", fontSize: "280%",  } : { top: "75%", left: "6%" }}>a fuck</Typography>
        </CanvasItem>
    )
}

