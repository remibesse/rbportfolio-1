import React, { useContext, useState } from "react"
import { motion } from "framer-motion"
import ReactPlayer from "react-player"
import CamCursor from "../../Cursor/CamCursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import sdmVideo from "./assets/sdm.jpg"
import sdm from "./assets/sdm.jpg"
import sdm1 from "./assets/sdm1.jpg"
import sdm2 from "./assets/sdm2.jpg"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"

export function SdmItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="sdm" top={10} left={120} width={22} fontSize={1.5} scrollSpeed={14}>
            <motion.div layoutId="project-container-sdm"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={sdm} alt="SDM" layoutId="project-image-sdm" />
                <ImageTitle
                    isHover={isHover}
                    title="SDM"
                    top="70%"
                    left="6%"
                    topHover="68%"
                    leftHover="6%"
                />
            </motion.div>
        </Item>
    )
}

export default function Sdm() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-sdm">
            <Gallery>
            <GalleryItem
                    layoutId="project-image-sdm"
                    onMouseOver={handlePointerOverVideo}
                    onMouseOut={() => setCursor(CamCursor("close"))}
                >
                    <div>
                        <ReactPlayer
                            url={sdmVideo}
                            type="video/mp4"
                            playsinline
                            controls
                            playing
                            loop
                            width="100%"
                            height="auto"
                        />
                    </div>
                </GalleryItem>
                <GalleryItem><img src={sdm1} alt="SDM" /></GalleryItem>
                <GalleryItem><img src={sdm2} alt="SDM" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}

