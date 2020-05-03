import React, {useContext, useState} from "react"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import {motion} from "framer-motion"
import Css from "../Css.js"
import {CursorContext} from "../../Cursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Image from "../../Image"
import Item from "../../Item"
import b from "./assets/b.jpg"
import duo from "./assets/duo.jpg"
import face from "./assets/face.jpg"
import portrait from "./assets/portrait.jpg"
import quatro from "./assets/quatro.jpg"
import faces from "./assets/faces.jpg"

export function FacesItem() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="faces" top={22} left={0} width={29} fontSize={1.5} scrollSpeed={17}>
            <motion.div layoutId="project-image-faces" className={classes.cover}
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={faces} alt="Faces"/>
                <Typography className={classes.titleItem}
                            style={isHover ? {top: "80%", left: "55%", fontSize: "150%"} : {top: "80%", left: "58%"}}>
                    Faces</Typography>
            </motion.div>
        </Item>
    )
}


export default function Faces() {

    return (
        // <motion.div style={{position: "relative"}}>
            <Gallery>
                <GalleryItem>
                    <motion.img layoutId="project-image-faces" src={faces} alt="Face"/>
                </GalleryItem>
                <GalleryItem><img src={b} alt="Face"/></GalleryItem>
                <GalleryItem><img src={quatro} alt="Quatro"/></GalleryItem>
                <GalleryItem><img src={face} alt="Face"/></GalleryItem>
                <GalleryItem><img src={portrait} alt="Portrait"/></GalleryItem>
                <GalleryItem><img src={duo} alt="Duo"/></GalleryItem>
            </Gallery>
        // </motion.div>
    )
}

