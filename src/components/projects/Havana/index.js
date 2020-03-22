import React, { useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import Carousel from 'react-bootstrap/Carousel'
import Css from "../Css.js"
import havana1 from "./assets/havana1.jpg"
import havana2 from "./assets/havana2.jpg"
import havana from "./assets/havana.jpg"

export default function Havana() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="1480px" left="530px" scrollSpeed={15} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="havana" image={havana} alt="Havana" height="480px">
                <Gallery>
                    <Carousel.Item>
                        <ReactPlayer
                            url="https://vimeo.com/388804671"
                            controls
                            playing
                            loop
                            muted
                            width="100%"
                        />
                    </Carousel.Item>
                    <Carousel.Item><img src={havana} alt="Havana" /></Carousel.Item>
                    <Carousel.Item><img src={havana} alt="Havana" /></Carousel.Item>
                    <Carousel.Item><img src={havana1} alt="Havana" /></Carousel.Item>
                    <Carousel.Item><img src={havana2} alt="Havana" /></Carousel.Item>
                </Gallery>
            </Project>
            <Typography className={classes.title} style={isHover ? { top: "30px", left: "20px", fontSize: "50px" } : { top: "23px", left: "100px" }}>Havana Club</Typography>
            <Typography className={classes.title} style={isHover ? { top: "78px", left: "90px", fontSize: "50px" } : { top: "50px", left: "140px" }}>Noches</Typography>
        </CanvasItem>
    )
}

