import React, {useState} from "react"
import {motion} from "framer-motion"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import streets from "./assets/streets.jpg"
import streets1 from "./assets/streets1.jpg"
import streets2 from "./assets/streets2.jpg"
import streets3 from "./assets/streets3.jpg"

export function StreetsItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="streets" top={0} left={74} width={23} fontSize={1.5} scrollSpeed={14}>
            <motion.div layoutId="project-image-streets"
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
            >
                <Image src={streets} alt="Streets"/>
                <ImageTitle
                    isHover={isHover}
                    title="Streets"
                    top="78%"
                    left="12%"
                    topHover="76%"
                    leftHover="9%"
                />
            </motion.div>
        </Item>
    )
}

export default function Streets() {

    return (
        <Gallery>
            <GalleryItem>
                <motion.img layoutId="project-image-streets" src={streets} alt="Streets"/>
            </GalleryItem>
            <GalleryItem><img src={streets1} alt="Streets"/></GalleryItem>
            <GalleryItem><img src={streets2} alt="Streets"/></GalleryItem>
            <GalleryItem><img src={streets3} alt="Streets"/></GalleryItem>
        </Gallery>
    )
}

