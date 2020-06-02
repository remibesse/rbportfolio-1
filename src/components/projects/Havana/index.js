import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { Typography } from "@material-ui/core"
import { CursorContext } from "../../Cursor"
import Gallery from "../../Gallery"
import GalleryItem from "../../GalleryItem"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import CamCursor from "../../Cursor/CamCursor"
import havanaVideo from "./assets/havana-club.mp4"
import havana1 from "./assets/havana1.jpg"
import havana2 from "./assets/havana2.jpg"
import havana from "./assets/havana.jpg"

export function HavanaItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="havana" top={87} left={33} width={25} fontSize={1.5} scrollSpeed={15}>
            <motion.div layoutId="project-image-havana"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={havana} alt="Havana" />
                <ImageTitle
                    isHover={isHover}
                    title="Havana Club"
                    top="6.5%"
                    left="26%"
                    topHover="7%"
                    leftHover="17%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Noches"
                    top="10%"
                    left="35%"
                    topHover="14%"
                    leftHover="30%"
                />
            </motion.div>
        </Item>
    )
}

export default function Havana() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-image-havana">
            <Gallery>
                <GalleryItem onPointerOver={handlePointerOverVideo}
                    onPointerOut={() => setCursor(CamCursor("close"))}
                >
                    <div>
                        <ReactPlayer
                            url={havanaVideo}
                            type="video/mp4"
                            playsinline
                            controls
                            playing
                            loop
                            width="100%"
                            height="auto"
                        />
                        <div className={classes.caption}> 
                        <Typography>Starring DJ Dorion Friends</Typography>
                        <Typography>Commissionner: Ludmilla Stephkov</Typography>
                        </div>
                    </div>
                </GalleryItem>
                <GalleryItem><img src={havana} alt="Havana"/></GalleryItem>
                <GalleryItem><img src={havana1} alt="Havana" /></GalleryItem>
                <GalleryItem><img src={havana2} alt="Havana" /></GalleryItem>
            </Gallery>
        </motion.div>
    )
}
