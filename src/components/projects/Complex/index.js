import React, {useContext, useState} from "react"
import {motion} from "framer-motion"
import Css from "../Css.js"
import {CursorContext} from "../../Cursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import DefaultCursor from "../../Cursor/DefaultCursor"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg"
import ReactPlayer from "react-player"

export function ComplexItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="complex" top={11} left={86} width={23} fontSize={1.5} scrollSpeed={20}>
            <motion.div layoutId="project-image-complex"
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
            >
                <Image src={complex} alt="Complex"/>
                <ImageTitle
                    isHover={isHover}
                    title="Complex"
                    top="80%"
                    left="6%"
                    topHover="80%"
                    leftHover="5%"
                />
            </motion.div>
        </Item>

    )
}

export default function Adidas() {
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }
    return (
        <Gallery>
            <GalleryItem>
                <motion.img layoutId="project-image-complex" src={complex} alt="Complex"/>
            </GalleryItem>
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
                    height="auto"
                /></GalleryItem>
            <GalleryItem><img src={zoneb} alt="Zone B"/></GalleryItem>
            <GalleryItem><img src={falcon} alt="Falcon"/></GalleryItem>
            <GalleryItem><img src={whitesmall} alt="Complex"/></GalleryItem>
        </Gallery>
    )
}

