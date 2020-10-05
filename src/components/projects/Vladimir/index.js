import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import { motion } from "framer-motion"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import vladimir from "./assets/vladimir.jpg"

export function VladimirItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="vladimir" top={5} left={44} width={29} fontSize={1.5} scrollSpeed={10}>
            <motion.div layoutId="project-container-vladimir"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={vladimir} alt="Vladimir" layoutId="project-image-vladimir" />
                <ImageTitle
                    isHover={isHover}
                    title="Vladimir"
                    top="70.5%"
                    left="5.5%"
                    topHover="67%"
                    leftHover="6%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Cauchemar"
                    top="77%"
                    left="13%"
                    topHover="78%"
                    leftHover="17%"
                />
            </motion.div>
        </Item>
    )
}

export default function Vladimir() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-vladimir">
            <motion.div layoutId="project-image-vladimir"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/442724594"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>Vladimir Cauchemar</Typography>
            </div>
        </motion.div>
    )
}
