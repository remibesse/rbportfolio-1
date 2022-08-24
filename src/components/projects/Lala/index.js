import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import { motion } from "framer-motion"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import lala from "./assets/lala.jpg"

export function LalaItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="lala" top={75} left={95} width={25} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-container-lala"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={lala} alt="Lala &Ce for bud" layoutId="project-image-lala" />
                <ImageTitle
                    isHover={isHover}
                    title="Lala"
                    top="72%"
                    left="50%"
                    topHover="70%"
                    leftHover="42%"
                />
            </motion.div>
        </Item>
    )
}

export default function Lala() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-lala">
            <motion.div layoutId="project-image-lala"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/495176442"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>LALA &CE FOR BUD</Typography>
            </div>
        </motion.div>
    )
}
