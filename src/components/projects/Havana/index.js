import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem";
import Css from "../Css.js"
import havana1 from "./assets/havana1.jpg"
import havana2 from "./assets/havana2.jpg"
import havana from "./assets/havana.jpg"
import {CursorContext} from "../../Cursor";
import Image from "../../Image";

export default function Havana() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <Image src={havana} alt="Havana" style={{width: "100%"}}/>
        <Typography className={classes.titleItem}
                    style={isHover ? {top: "5%", left: "13%", fontSize: "150%"} : {top: "6%", left: "26%"}}>Havana
            Club</Typography>
        <Typography className={classes.titleItem}
                    style={isHover ? {top: "15%", left: "28%", fontSize: "150%"} : {top: "13%", left: "35%"}}>
            Noches</Typography>
    </div>
    return (
        <CanvasItem top={83} left={33} width={25} fontSize={1.5} scrollSpeed={15} className={classes.item}>
            <Project id="havana" cover={cover}>
                <Gallery>
                    <GalleryItem onPointerOver={handlePointerOverVideo}>
                        <ReactPlayer
                            url="https://vimeo.com/388804671"
                            controls
                            playing
                            loop
                            muted
                            width="100%"
                            height="100%"
                        /></GalleryItem>
                    <GalleryItem><img src={havana} alt="Havana"/></GalleryItem>
                    <GalleryItem><img src={havana1} alt="Havana"/></GalleryItem>
                    <GalleryItem><img src={havana2} alt="Havana"/></GalleryItem>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

