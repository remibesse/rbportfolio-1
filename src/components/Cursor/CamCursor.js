import React from "react"
import {motion} from "framer-motion"

export default function CamCursor(variant) {
    const variants = (initialCoordinates, camCoordinates, initialSize, camSize) => ({
        initial: {
            x: initialCoordinates.x,
            y: initialCoordinates.y,
            width: initialSize.width,
            height: initialSize.height,
            opacity: 0,
            transition:{
               duration: 0.2
            }
        },
        cam: {
            x: camCoordinates.x,
            y: camCoordinates.y,
            width: camSize.width,
            height: camSize.height,
            opacity: 1,
            transition:{
                duration: 0.2
            }
        }
    })

    return (
        <svg version="1.1" viewBox="0 0 1154 654" fill="rgb(255,255,255)" xmlns="http://www.w3.org/2000/svg"
             width={372}
             style={{position: "relative", left: "-185px", top: "-105px"}}
        >
            <motion.g id="middle-cross" animate={{rotate: variant === "close" ? 45 : 0}}  transition={{ type: "spring", mass: "0.3", stiffness: 150}}>
                <rect x="575" y={variant === "close" ? 282 : 287} rx="1" ry="1" width="4" height={variant === "close" ? 90 : 80}/>
                <rect x="532" y="325" rx="1" ry="1" width="90" height="4"/>
            </motion.g>

            <g id="inner-frame">
                <rect x="422" y="239" rx="1" ry="1" width="4" height="45"/>
                <rect x="422" y="239" rx="1" ry="1" width="45" height="4"/>

                <rect x="728" y="239" rx="1" ry="1" width="4" height="45"/>
                <rect x="687" y="239" rx="1" ry="1" width="45" height="4"/>

                <rect x="422" y="370" rx="1" ry="1" width="4" height="45"/>
                <rect x="422" y="411" rx="1" ry="1" width="45" height="4"/>

                <rect x="728" y="370" rx="1" ry="1" width="4" height="45"/>
                <rect x="687" y="411" rx="1" ry="1" width="45" height="4"/>
            </g>

            <motion.g id="outer-frame">
                <motion.rect
                    variants={variants({x: 422, y: 239}, {x: 0, y: 0}, {width: 4, height: 45}, {width: 4, height: 165})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 422, y: 239}, {x: 0, y: 0}, {width: 45, height: 4}, {width: 165, height: 4})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 728, y: 239}, {x: 1150, y: 0}, {width: 4, height: 45}, {width: 4, height: 165})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 687, y: 239}, {x: 989, y: 0}, {width: 45, height: 4}, {width: 165, height: 4})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 422, y: 370}, {x: 0, y: 489}, {width: 6, height: 45}, {width: 4, height: 165})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 422, y: 411}, {x: 0, y: 650}, {width: 45, height: 4}, {width: 165, height: 4})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 728, y: 370}, {x: 1150, y: 489}, {width: 4, height: 45}, {width: 4, height: 165})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
                <motion.rect
                    variants={variants({x: 687, y: 411}, {x: 989, y: 650}, {width: 45, height: 4}, {width: 165, height: 4})}
                    initial="initial" animate={variant} transition="transition" rx="1" ry="1"
                />
            </motion.g>

            <motion.g initial={{scale: 0}} animate={variant === "cam" ? {scale: 1} : {scale: 0}} transition={{duration:0.2}}>
                <g id="rec">
                    <motion.circle cx="37" cy="37" r="14"/>
                    <text x="60" y="48" font-size="30" font-family="Arial" font-weight="bold">REC</text>
                </g>
                <g id="battery">
                    <rect x="1073" y="26" rx="2" ry="2" width="56" height="4"/>
                    <rect x="1073" y="53" rx="2" ry="2" width="56" height="4"/>
                    <rect x="1065" y="34" rx="2" ry="2" width="10" height="17"/>
                    <rect x="1073" y="26" rx="2" ry="2" width="4" height="33"/>
                    <rect x="1123" y="26" rx="2" ry="2" width="4" height="33"/>
                    <rect x="1096" y="34" rx="2" ry="2" width="25" height="17"/>
                </g>
                <g id="exposition-scale">
                    <rect x="364" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="382" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="400" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="418" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="436" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="454" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="472" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="490" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="508" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="526" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="544" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="562" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="580" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="598" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="616" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="634" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="652" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="670" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="688" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="706" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="724" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="742" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="760" y="590" rx="2" ry="2" width="15" height="13"/>
                    <rect x="778" y="590" rx="2" ry="2" width="15" height="13"/>

                    <text x="365" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">-25
                    </text>
                    <text x="422" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">20
                    </text>
                    <text x="478" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">10
                    </text>
                    <text x="556" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">7
                    </text>
                    <text x="640" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">5
                    </text>
                    <text x="711" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">3
                    </text>
                    <text x="753" y="624" font-size="17" font-family="Consolas" font-style="italic"
                          font-weight="bold">1
                    </text>

                    <rect x="364" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="382" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="400" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="418" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="436" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="454" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="472" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="490" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="508" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="526" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="544" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="562" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="580" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="598" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="616" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="634" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="652" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="670" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="688" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="706" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="724" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="742" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="760" y="634" rx="2" ry="2" width="15" height="13"/>
                    <rect x="778" y="634" rx="2" ry="2" width="15" height="13"/>
                </g>
            </motion.g>
        </svg>
    )
}
