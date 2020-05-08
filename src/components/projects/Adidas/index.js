import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
import {motion} from "framer-motion"
import Css from "../Css.js"
import {CursorContext} from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import TitleImage from "../TitleImage"
import adidas from "./assets/adidas.jpg"

export function AdidasItem() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="adidas" top={1} left={27} width={28} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-image-adidas" className={classes.cover}
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
                        animate
            >
                <Image src={adidas} alt="Adidas"/>
                <TitleImage
                    isHover={isHover}
                    title="Adidas"
                    style={isHover ? {top: "58%", left: "4%", fontSize: "150%"} : {top: "67%", left: "5%"}}
                />
                <TitleImage
                    isHover={isHover}
                    title="Reboosted"
                    style={isHover ? {top: "74%", left: "10%", fontSize: "150%"} : {top: "78%", left: "9.5%"}}
                />
            </motion.div>
        </Item>
    )
}

export default function Adidas() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div key="project-adidas" style={{position: "relative"}}>
            <motion.div key="image-adidas" layoutId="project-image-adidas"
                        style={{position: "absolute", width: "100%", height: "100%", opacity: 0}}
            />
            <div className={classes.videoWrapper}
                 onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/323459822"
                    controls
                    playing
                    loop
                    muted
                />
            </div>
            <div className={classes.caption}>
                <Typography>Adidas reboosted</Typography>
                <Typography>Directed by Remi Besse</Typography>
                <Typography>Dop Ludovic Zuili</Typography>
                <Typography>Soundtrack Le Ministere</Typography>
            </div>
        </motion.div>
    )
}

