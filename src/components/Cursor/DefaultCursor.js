import React from "react"
import {motion} from "framer-motion"

export default function DefaultCursor({close}) {
    return (
        <svg version="1.1" viewBox="0 0 310 176" fill="rgb(255,255,255)" xmlns="http://www.w3.org/2000/svg"
             width={100}
             style={{position: "relative", left: "-49px", top: "-28px"}}
        >
            <motion.g id="middle-cross" animate={{rotate: close ? 45 : 0}}  transition={{ type: "spring", mass: "0.3", stiffness: 150}}>
                <motion.rect animate x={152} y={close ? 33 : 48} rx="1" ry="1" width={6} height={close ? 110 : 80}/>
                <motion.rect animate x={close ? 100 : 90} y={85} rx="1" ry="1" width={close ? 110 : 130} height={6}/>
            </motion.g>

            <g id="inner-frame">
                <rect x="0" y="0" rx="1" ry="1" width="6" height="45"/>
                <rect x="0" y="0" rx="1" ry="1" width="45" height="6"/>

                <rect x="304" y="0" rx="1" ry="1" width="6" height="45"/>
                <rect x="265" y="0" rx="1" ry="1" width="45" height="6"/>

                <rect x="0" y="131" rx="1" ry="1" width="6" height="45"/>
                <rect x="0" y="170" rx="1" ry="1" width="45" height="6"/>

                <rect x="304" y="131" rx="1" ry="1" width="6" height="45"/>
                <rect x="265" y="170" rx="1" ry="1" width="45" height="6"/>
            </g>
        </svg>
    )
}
