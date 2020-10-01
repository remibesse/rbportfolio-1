import React, { useContext, useState } from "react"
import { motion } from "framer-motion"
import { CursorContext } from "../../Cursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import CamCursor from "../../Cursor/CamCursor"
import oboyVideo from "./assets/oboy.mp4"
import oboy1 from "./assets/oboy1.jpg"
import oboy2 from "./assets/oboy2.jpg"
import oboy3 from "./assets/oboy3.jpg"
import oboy from "./assets/oboy.jpg"

export function OboyItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="oboy" top={17} left={13} width={25} fontSize={1.5} scrollSpeed={20}>
            <motion.div layoutId="project-container-oboy"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={oboy} alt="Oboy" layoutId="project-image-oboy" />
                <ImageTitle
                    isHover={isHover}
                    title="Oboy"
                    top="80%"
                    left="6%"
                    topHover="80%"
                    leftHover="5%"
                />
            </motion.div>
        </Item>
    )
}

export default function Oboy() {
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }
    return (
        <motion.div layoutId="project-container-oboy">
            <Gallery>
                <GalleryItem
                    layoutId="project-image-oboy"
                    onPointerOver={handlePointerOverVideo}
                    onPointerOut={() => setCursor(CamCursor("close"))}

                >
                    <video width="fill-available" height="fill-available"
                        controls
                        autoPlay
                        playsinline
                        loop>
                        <source src={oboyVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </GalleryItem>
                <GalleryItem><img src={oboy1} alt="Complex" /></GalleryItem>
                <GalleryItem><img src={oboy2} alt="Zone B" /></GalleryItem>
                <GalleryItem><img src={oboy3} alt="Falcon" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}

