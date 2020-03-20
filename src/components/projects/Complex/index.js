import React, { useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Gallery from "../../Gallery"
import Carousel from 'react-bootstrap/Carousel'
import Css from "../Css.js"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg";

export default function Complex() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="140px" left="1500px" scrollSpeed={19} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            <Popup image={complex} alt="Complex" height="380px">
                <Gallery>
                    <Carousel.Item>
                        <ReactPlayer
                            url={complexVideo}
                            controls
                            playing
                            loop
                            muted
                            height="100%"
                        />
                    </Carousel.Item>
                    <Carousel.Item><img src={complex} alt="Complex" /></Carousel.Item>
                    <Carousel.Item><img src={zoneb} alt="Zone B" /></Carousel.Item>
                    <Carousel.Item><img src={falcon} alt="Falcon" /></Carousel.Item>
                    <Carousel.Item><img src={whitesmall} alt="Complex" /></Carousel.Item>
                </Gallery>
            </Popup>
            <Typography className={classes.title} style={isHover ? { top: "280px", left: "20px", fontSize: "50px" } : { top: "300px", left: "20px" }}>Complex</Typography>
        </CanvasItem>
    )
}

