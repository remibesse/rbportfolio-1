import React, {useState} from "react"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Css from "../Css.js"
import fuck from "./assets/fuck.jpg"
import dimanche from "./assets/dimanche.jpg"
import giveafuck from "./assets/giveafuck.jpg"
import Image from "../../Image";

export default function Giveafuck() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <Image src={giveafuck} alt="Give a fuck"/>
        <Typography className={classes.titleItem}
                    style={isHover ? {top: "66%", left: "6%", fontSize: "150%"} : {top: "68%", left: "6%"}}>
            Give</Typography>
        <Typography className={classes.titleItem}
                    style={isHover ? {top: "76%", left: "6%", fontSize: "150%"} : {top: "75%", left: "6%"}}>a
            fuck</Typography>
    </div>

    return (
        <CanvasItem top={37} left={77} width={26} fontSize={1.5} scrollSpeed={14} className={classes.item}>
            <Project id="giveafuck" cover={cover}>
                <Gallery>
                    <GalleryItem><img src={giveafuck} alt="Give a fuck"/></GalleryItem>
                    <GalleryItem><img src={dimanche} alt="Give a fuck"/></GalleryItem>
                    <GalleryItem><img src={fuck} alt="Share more consume less"/></GalleryItem>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

