import React from "react"
import {motion} from "framer-motion"

export default function DefaultCursor({close}) {
    return (
        <svg version="1.1" viewBox="0 0 310 176" fill="rgb(255,255,255)" xmlns="http://www.w3.org/2000/svg"
             width={100}
             style={{position: "relative", left: "-49px", top: "-28px"}}
        >
            <motion.g id="middle-cross" animate={{rotate: close ? 45 : 0}}  transition={{ type: "spring", mass: "0.3", stiffness: 150}}>
                <motion.rect animate x={153} y={close ? 43 : 48} rx="1" ry="1" width={4} height={close ? 90 : 80}/>
                <motion.rect animate x={close ? 110 : 111} y={85} rx="1" ry="1" width={close ? 90 : 90} height={4}/>
            </motion.g>

            <g id="inner-frame">
                <rect x="0" y="0" rx="1" ry="1" width="4" height="45"/>
                <rect x="0" y="0" rx="1" ry="1" width="45" height="4"/>

                <rect x="306" y="0" rx="1" ry="1" width="4" height="45"/>
                <rect x="267" y="0" rx="1" ry="1" width="45" height="4"/>

                <rect x="0" y="133" rx="1" ry="1" width="4" height="45"/>
                <rect x="0" y="172" rx="1" ry="1" width="45" height="4"/>

                <rect x="306" y="133" rx="1" ry="1" width="4" height="45"/>
                <rect x="267" y="172" rx="1" ry="1" width="45" height="4"/>
            </g>
        </svg>
    )
}
