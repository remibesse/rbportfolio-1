import React, { useState } from "react"
import { motion } from "framer-motion"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import fuck from "./assets/fuck.jpg"
import dimanche from "./assets/dimanche.jpg"
import giveafuck from "./assets/giveafuck.jpg"

export function GiveAFuckItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="giveAFuck" top={48} left={89} width={26} fontSize={1.5} scrollSpeed={14}>
            <motion.div layoutId="project-container-giveafuck"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={giveafuck} alt="Give a fuck" layoutId="project-image-giveafuck" />
                <ImageTitle
                    isHover={isHover}
                    title="Give"
                    top="70%"
                    left="6%"
                    topHover="68%"
                    leftHover="6%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="A Fuck"
                    top="74%"
                    left="6%"
                    topHover="76%"
                    leftHover="6%"
                />
            </motion.div>
        </Item>
    )
}

export default function GiveAFuck() {

    return (
        <motion.div layoutId="project-container-giveafuck">
            <Gallery>
                <GalleryItem><motion.img src={giveafuck} alt="Give a fuck" layoutId="project-image-giveafuck" /></GalleryItem>
                <GalleryItem><img src={dimanche} alt="Give a fuck" /></GalleryItem>
                <GalleryItem><img src={fuck} alt="Share more consume less" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}

