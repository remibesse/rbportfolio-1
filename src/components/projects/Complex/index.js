import React, { useContext, useState } from "react"
import { motion } from "framer-motion"
import { CursorContext } from "../../Cursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import CamCursor from "../../Cursor/CamCursor"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg"
import ReactPlayer from "react-player"
import Css from "../Css";

export function ComplexItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="complex" top={11} left={86} width={23} fontSize={1.5} scrollSpeed={20}>
            <motion.div layoutId="project-container-complex"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={complex} alt="Complex" />
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
    const classes = Css()

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }
    return (
        <motion.div layoutId="project-container-complex">
            <Gallery>
                <GalleryItem onPointerOver={handlePointerOverVideo}
                    onPointerOut={() => setCursor(CamCursor("close"))}
                >
                    <video width="fill-available" height="fill-available"
                        controls
                        autoPlay
                        playsinline
                        loop>
                        <source src={complexVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </GalleryItem>
                <GalleryItem><img src={complex} alt="Complex"/></GalleryItem>
                <GalleryItem><img src={zoneb} alt="Zone B" /></GalleryItem>
                <GalleryItem><img src={falcon} alt="Falcon" /></GalleryItem>
                <GalleryItem><img src={whitesmall} alt="Complex" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}

