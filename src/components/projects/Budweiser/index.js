import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
import {motion} from "framer-motion";
import Css from "../Css.js"
import {CursorContext} from "../../Cursor";
import Image from "../../Image";
import DefaultCursor from "../../Cursor/DefaultCursor";
import Item from "../../Item";
import budweiser from "./assets/budweiser.jpg"

export function BudweiserItem() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="budweiser" top={43} left={41} width={25} fontSize={1.5} scrollSpeed={19}>
            <motion.div layoutId="project-image-budweiser" className={classes.cover}
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}>
                <Image src={budweiser} alt="Budweiser Kings"/>
                <Typography className={classes.titleItem} style={isHover ? {top: "1%", left: "7%", fontSize: "150%"} : {
                    top: "2%",
                    left: "7%"
                }}>Budweiser</Typography>
                <Typography className={classes.titleItem}
                            style={isHover ? {top: "8%", left: "17%", fontSize: "150%"} : {top: "7%", left: "14%"}}>
                    Kings</Typography>
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
        <motion.div layoutId="project-image-budweiser">
            <div className={classes.videoWrapper}
                 onPointerOver={handlePointerOverVideo}
                 onPointerOut={() => setCursor(DefaultCursor({close: true}))}
            >
                <ReactPlayer
                    url="https://vimeo.com/376855589/b811044f1f"
                    controls
                    playing
                    loop
                    muted
                />
            </div>
            <div className={classes.caption}>
                <Typography>Budweiser Kings</Typography>
            </div>
        </motion.div>
    )
}

