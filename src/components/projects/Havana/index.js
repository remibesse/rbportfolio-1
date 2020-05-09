import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import {motion} from "framer-motion"
import Css from "../Css.js"
import {CursorContext} from "../../Cursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import havana1 from "./assets/havana1.jpg"
import havana2 from "./assets/havana2.jpg"
import havana from "./assets/havana.jpg"

export function HavanaItem() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)


    return (
        <Item id="havana" top={83} left={33} width={25} fontSize={1.5} scrollSpeed={15}>
            <motion.div layoutId="project-image-havana"
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
            >
                <Image src={havana} alt="Havana"/>
                <ImageTitle
                    isHover={isHover}
                    title="Havana Club"
                    style={isHover ? {top: "5%", left: "13%", fontSize: "150%"} : {top: "6%", left: "26%"}}
                />
                <ImageTitle
                    isHover={isHover}
                    title="Noches"
                    style={isHover ? {top: "15%", left: "28%", fontSize: "150%"} : {top: "13%", left: "35%"}}
                />
            </motion.div>
        </Item>
    )
}

export default function Havana() {
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }
    return (
        <Gallery>
            <GalleryItem>
                <motion.img layoutId="project-image-havana" src={havana} alt="Havana"/>
            </GalleryItem>
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
            <GalleryItem><img src={havana1} alt="Havana"/></GalleryItem>
            <GalleryItem><img src={havana2} alt="Havana"/></GalleryItem>
        </Gallery>
    )
}

