import React, { useContext, useState, useRef, useEffect } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import ImageTitle from "../ImageTitle"
import overall from "./assets/overall.mp4"
import { useVideoPlayback } from "../../../hook/useVideoPlayback"

export function OverallItem() {
    const [isHover, setIsHover] = useState(false)
    const videoRef = useRef(null)
    useVideoPlayback(videoRef);

    return (
        <Item id="overall" top={136} left={3} width={30} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-container-overall"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <motion.video layoutId="project-image-overall"
                    ref={videoRef}
                    src={overall}
                    type="video/mp4"
                    loading="lazy" 
                    loop 
                    playsInline
                    style={{ width: "100%" }}
                />
                <ImageTitle
                    isHover={isHover}
                    title="overall"
                    top="75%"
                    left="9%"
                    topHover="74%"
                    leftHover="10%"
                />
            </motion.div>
        </Item>
    )
}

export default function Overall() {
    const classes = Css()

    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-overall">
            <motion.div layoutId="project-image-overall"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/741847098"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>Overall</Typography>
            </div>
        </motion.div>
    )
}

