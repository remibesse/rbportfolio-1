import React, { useState } from "react"
import Image from "../../Image"
import vimsml from "./assets/vimsml.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function VimsmlItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="vimsml" top={74} left={11} width={34} scrollSpeed={12}>
            <motion.div layoutId="project-container-vimsml"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={vimsml} alt="Vimsml" layoutId="project-image-vimsml" />
            </motion.div>
        </Item>
    )
}

export default function Vimsml() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-vimsml">
            <motion.img src={vimsml} alt="Vimsml" layoutId="project-image-vimsml " classeName={classes.zoomedImage} />
        </motion.div>
    )
}