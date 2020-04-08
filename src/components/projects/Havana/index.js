import React, {useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
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
        <CanvasItem top={83} left={33} width={25} fontSize={1.5} scrollSpeed={15} className={classes.item}
                    onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)}
                    onPointerUp={() => setIsHover(false)}>
            <Project id="havana" image={havana} alt="Havana" height="480px">
                <Gallery>
                    <Carousel.Item className={classes.videoWrapper}>
                        <ReactPlayer
                            url="https://vimeo.com/388804671"
                            controls
                            playing
                            loop
                            muted
                        />
                    </Carousel.Item>
                    <Carousel.Item><img src={havana} alt="Havana" loading="lazy"/></Carousel.Item>
                    <Carousel.Item><img src={havana1} alt="Havana" loading="lazy"/></Carousel.Item>
                    <Carousel.Item><img src={havana2} alt="Havana" loading="lazy"/></Carousel.Item>
                </Gallery>
            </Project>
            <Typography className={classes.titleItem}
                        style={isHover ? {top: "5%", left: "13%", fontSize: "150%"} : {top: "6%", left: "26%"}}>Havana
                Club</Typography>
            <Typography className={classes.titleItem} style={isHover ? {top: "15%", left: "28%", fontSize: "150%"} : {
                top: "13%",
                left: "35%"
            }}>Noches</Typography>
        </CanvasItem>
    )
}

