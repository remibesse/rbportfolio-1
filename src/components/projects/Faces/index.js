import React, {useState} from "react"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Css from "../Css.js"
import b from "./assets/b.jpg"
import duo from "./assets/duo.jpg"
import face from "./assets/face.jpg"
import portrait from "./assets/portrait.jpg"
import quatro from "./assets/quatro.jpg"
import faces from "./assets/faces.jpg"
import Image from "../../Image";

export default function Faces() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <Image src={faces} alt="Faces" style={{width: "100%"}}/>
        <Typography className={classes.titleItem}
                    style={isHover ? {top: "80%", left: "55%", fontSize: "150%"} : {top: "80%", left: "58%"}}>
            Faces</Typography>
    </div>

    return (
        <CanvasItem top={22} left={0} width={29} fontSize={1.5} scrollSpeed={17} className={classes.item}>
            <Project id="faces" cover={cover}>
                <Gallery>
                    <GalleryItem><img src={faces} alt="Face"/></GalleryItem>
                    <GalleryItem><img src={b} alt="Face"/></GalleryItem>
                    <GalleryItem><img src={quatro} alt="Quatro"/></GalleryItem>
                    <GalleryItem><img src={face} alt="Face"/></GalleryItem>
                    <GalleryItem><img src={portrait} alt="Portrait"/></GalleryItem>
                    <GalleryItem><img src={duo} alt="Duo"/></GalleryItem>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

