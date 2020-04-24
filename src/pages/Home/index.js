import React, {useState, useEffect, useRef} from "react"
import {makeStyles} from '@material-ui/core/styles'
import CanvasScroll from "../../components/CanvasScroll"
import VideoIntro from "../../components/projects/VideoIntro"
import Adidas from "../../components/projects/Adidas"
import Streets from "../../components/projects/Streets"
import Complex from "../../components/projects/Complex"
import Faces from "../../components/projects/Faces"
import Giveafuck from "../../components/projects/Giveafuck"
import Budweiser from "../../components/projects/Budweiser"
import Havana from "../../components/projects/Havana"
import AccorHotels from "../../components/projects/AccorHotels"
import Sept from "../../components/projects/Sept"
import Stylist1 from "../../components/projects/Stylist1"
import Stylist2 from "../../components/projects/Stylist2"
import Print from "../../components/projects/Print"
import Vimsml from "../../components/projects/Vimsml"
import Cavani from "../../components/projects/Cavani"
import Blue from "../../components/projects/Blue"
import Psg from "../../components/projects/PsgJordan"
import Red from "../../components/projects/Red"
import {motion} from "framer-motion"

const useStyles = makeStyles({
    root: {
        height: "100vh",
    }
})

function useForceUpdate() {
    const [, setValue] = useState(0)
    return () => setValue(value => ++value)
}

export default function Home(props) {
    const style = useStyles()
    const forceUpdate = useForceUpdate()
    const introLaunchTimeoutRef = useRef()
    const introFinishedTimeoutRef = useRef()
    const [intro, setIntro] = useState(
        document.documentElement.clientWidth < 600 ?
            false :
            (props.intro !== undefined ? props.intro : true)
    )
    const introLaunchTimeout = 7000
    const introDuration = 6200

    useEffect(() => {
        introLaunchTimeoutRef.current = setTimeout(() => setIntro(false), introLaunchTimeout)
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener('resize', forceUpdate)
        return () => {
            clearTimeout(introLaunchTimeoutRef.current)
            clearTimeout(introFinishedTimeoutRef.current)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const introPlaying = () => {
        clearTimeout(introLaunchTimeoutRef.current)
        introFinishedTimeoutRef.current = setTimeout(() => setIntro(false), introDuration)
    }

    const handleKeyDown = e => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape")
            setIntro(false)
    }

    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4
    const videoPosition = 34 * scaler
    const videoSize = 36 * scaler
    const restScreen = document.documentElement.clientWidth - videoSize
    const initialScroll = {x: -(videoPosition - restScreen / 2) - 50, y: 0}

    const transition = {
        in: {
            x: "-5%",
            scale: (0.8),
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        out: {
            opacity: 0,
            y: "60vh",
        }
    }

    return (
        <div style={{height: "100%", width: "100%"}}>
            <CanvasScroll scroll={initialScroll}
                          reset={props.reset}
                          canvasEnds={{right: 151 * scaler + 50 + 50, bottom: 119 * scaler + 50 + 50}}
                          scrollSpeed={intro ? 0 : 55}
                          className={style.root}>
                <div style={{position: "relative", top: 50, left: 50}}>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.75} }
                    >
                    <VideoIntro fullscreen={intro} onCanPlay={introPlaying} onClick={() => setIntro(false)}/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.70}}
                    >
                        <Adidas/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.20}}
                    >
                        <Streets/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.40}}
                    >
                        <Complex/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.30}}
                    >
                        <Faces/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.75}}
                    >
                        <Giveafuck/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1}}
                    >
                        <Budweiser/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.5}}
                    >
                        <Havana/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.60}}
                    >
                        <AccorHotels/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.75}}
                    >
                        <Sept/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                           variants={transition}
                           initial="in"
                           animate="animate"
                           exit="out"
                           transition={{duration: 1.60}}
                    >
                        <Stylist1/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.50}}
                    >
                        <Print/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.30}}
                    >
                        <Vimsml/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.25}}
                    >
                        <Cavani/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1}}
                    >
                        <Blue/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.20}}
                    >
                        <Psg/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.25}}
                    >
                        <Stylist2/>
                    </motion.div>
                    <motion.div position={"relative"} size={"100%"}
                                variants={transition}
                                initial="in"
                                animate="animate"
                                exit="out"
                                transition={{duration: 1.75 }}
                    >
                        <Red/>
                    </motion.div>
                </div>
            </CanvasScroll>
        </div>
    )
}

