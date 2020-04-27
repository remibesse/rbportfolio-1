import React, {useContext, useState} from "react"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Css from "../Css.js"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg"
import {CursorContext} from "../../Cursor";
import ReactPlayer from "react-player";
import Image from "../../Image";
import DefaultCursor from "../../Cursor/DefaultCursor";

export default function Complex() {
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
        <Image src={complex} alt="Complex"/>
        <Typography className={classes.titleItem}
                    style={isHover ? {top: "80%", left: "5%", fontSize: "150%"} : {top: "80%", left: "6%"}}>
            Complex</Typography>
    </div>

    return (
        <CanvasItem top={11} left={86} width={23} fontSize={1.5} scrollSpeed={20} className={classes.item}>
            <Project id="complex" cover={cover}>
                <Gallery>
                    <GalleryItem onPointerOver={handlePointerOverVideo}
                                 onPointerOut={() => setCursor(DefaultCursor({close: true}))}
                    >
                        <ReactPlayer
                            url={complexVideo}
                            type="video/mp4"
                            controls
                            playing
                            loop
                            muted
                            height="100%"
                        /></GalleryItem>
                    <GalleryItem><img src={complex} alt="Complex"/></GalleryItem>
                    <GalleryItem><img src={zoneb} alt="Zone B"/></GalleryItem>
                    <GalleryItem><img src={falcon} alt="Falcon"/></GalleryItem>
                    <GalleryItem><img src={whitesmall} alt="Complex"/></GalleryItem>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

