import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
import {motion} from "framer-motion"
import Css from "../Css.js"
import {CursorContext} from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import adidas from "./assets/adidas.jpg"

export function AdidasItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="adidas" top={1} left={27} width={28} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-image-adidas"
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
            >
                <Image src={adidas} alt="Adidas"/>
                <ImageTitle
                    isHover={isHover}
                    title="Adidas"
                    top="68%"
                    left="5%"
                    topHover="60%"
                    leftHover="4%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Reboosted"
                    top="75%"
                    left="9%"
                    topHover="74%"
                    leftHover="10%"
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
        <motion.div layoutId="project-image-adidas">
            <div className={classes.videoWrapper}
                 onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/323459822"
                    controls
                    playing
                    loop
                    muted
                    height="auto"
                    width="auto"
                />
            </div>
            <div className={classes.caption}>
                <Typography>Adidas reboosted</Typography>
                <Typography>Directed by Remi Besse</Typography>
                <Typography>Producer Julie Mathieu Iconoclast</Typography>
                <Typography>Dop Ludovic Zuili</Typography>
                <Typography>Soundtrack Le Ministere Studio</Typography>
                <Typography>Creative Barbara Paloc</Typography>
                <Typography>Editor Jon Echeveste</Typography>
            </div>
        </motion.div>
    )
}

