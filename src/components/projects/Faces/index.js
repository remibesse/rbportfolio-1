import React, {useState} from "react"
import {Typography} from "@material-ui/core"
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

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <img src={faces} alt="Faces" style={{width: "100%"}}/>
        <Typography className={classes.titleItem} style={isHover ? {top: "80%", left: "55%", fontSize: "150%"} : {
            top: "80%",
            left: "58%"
        }}>Faces</Typography>
    </div>

    return (
        <CanvasItem top={22} left={0} width={29} fontSize={1.5} scrollSpeed={17} className={classes.item}
                    onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)}
                    onPointerUp={() => setIsHover(false)}>
            <Project id="faces" cover={cover}>
                <Gallery>
                    <Carousel.Item><img src={faces} alt="Face"/></Carousel.Item>
                    <Carousel.Item><img src={b} alt="Face"/></Carousel.Item>
                    <Carousel.Item><img src={quatro} alt="Quatro"/></Carousel.Item>
                    <Carousel.Item><img src={face} alt="Face"/></Carousel.Item>
                    <Carousel.Item><img src={portrait} alt="Portrait"/></Carousel.Item>
                    <Carousel.Item><img src={duo} alt="Duo"/></Carousel.Item>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

