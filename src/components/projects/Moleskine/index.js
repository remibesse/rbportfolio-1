import React, { useState } from "react"
import { motion } from "framer-motion"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Image from "../../Image"
import Item from "../../Item"
import moleskine1 from "./assets/moleskine1.jpg"
import moleskine2 from "./assets/moleskine2.jpg"
import moleskine3 from "./assets/moleskine3.jpg"
import moleskine4 from "./assets/moleskine4.jpg"
import ImageTitle from "../ImageTitle"

export function MoleskineItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="moleskine" top={46} left={78} width={22} fontSize={1.5} scrollSpeed={15} style={{zindex: 2000}}>
            <motion.div layoutId="project-container-moleskine"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={moleskine1} alt="Moleskine" layoutId="project-image-moleskine"/>
                <ImageTitle
                    isHover={isHover}
                    title="Moleskine"
                    top="80%"
                    left="7%"
                    topHover="80%"
                    leftHover="7%"
                />
            </motion.div>
        </Item>
    )
}

export default function Moleskine() {

    return (
        <motion.div layoutId="project-container-moleskine">
            <Gallery>
                <GalleryItem><motion.img src={moleskine1} alt="Moleskine" layoutId="project-image-moleskine" /></GalleryItem>
                <GalleryItem><img src={moleskine2} alt="Moleskine" /></GalleryItem>
                <GalleryItem><img src={moleskine3} alt="Moleskine" /></GalleryItem>
                <GalleryItem><img src={moleskine4} alt="Moleskine" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}
