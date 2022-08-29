import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import ImageTitle from "../ImageTitle"
import Image from "../../Image"
import Item from "../../Item"
import budweiser from "./assets/budweiser.jpg"

export function BudweiserItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="budweiser" top={143} left={114} width={22} fontSize={1.5} scrollSpeed={16}>
            <motion.div layoutId="project-container-budweiser"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={budweiser} alt="Budweiser Kings" layoutId="project-image-budweiser" />
                <ImageTitle
                    isHover={isHover}
                    title="Budweiser"
                    top="2%"
                    left="7%"
                    topHover="2%"
                    leftHover="7%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Kings"
                    top="5.2%"
                    left="14%"
                    topHover="9%"
                    leftHover="17%"
                />
            </motion.div>
        </Item>

    )
}

export default function Budweiser() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-budweiser">
            <motion.img src={budweiser} alt="Budweiser Kings" layoutId="project-image-budweiser" className={classes.positionImage} />
            <div className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/376855589/b811044f1f"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </div>
            <div className={classes.caption}>
                <Typography>Budweiser Kings</Typography>
            </div>
        </motion.div>
    )
}

