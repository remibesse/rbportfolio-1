import React, { useState } from "react"
import Image from "../../Image"
import stylist1 from "./assets/stylist1.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function Stylist1Item() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="stylist1" top={54} left={116} width={23} scrollSpeed={10}>
            <motion.div layoutId="project-container-stylist1"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={stylist1} alt="Stylist" layoutId="project-image-stylist1" />
            </motion.div>
        </Item>
    )
}

export default function Stylist1() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-stylist1">
            <motion.img src={stylist1} alt="Stylist" layoutId="project-image-stylist1" classeName={classes.zoomedImage} />
        </motion.div>
    )
}