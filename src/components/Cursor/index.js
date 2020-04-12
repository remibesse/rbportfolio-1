import React, {createContext, useState, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import cursorCenter from "./assets/cursor-center.svg"
import camCursor from "./assets/cursor.svg"
import closeCursor from "./assets/close-cursor.svg"

const useStyles = makeStyles({
    "@global": {
        "*": props => ({
            cursor: props.isVisible ? "none" : "auto"
        })
    },
    camCursor: {
        "@media (pointer: coarse)": {
            display: "none"
        }
    }
})

export const CursorContext = createContext(() => {
})

export default function CursorProvider(props) {
    const [position, setPosition] = useState({x: -Number.MAX_SAFE_INTEGER, y: -Number.MAX_SAFE_INTEGER})
    const [component, setComponent] = useState(DefaultCursor)
    const classes = useStyles({isVisible: component !== undefined})

    const handleMouseMove = e => setPosition({x: e.clientX, y: e.clientY})

    useEffect(
        () => {
            document.addEventListener("mousemove", handleMouseMove)
            return () => window.removeEventListener("mousemove", handleMouseMove)
        },
        []
    )

    return (
        <CursorContext.Provider value={setComponent}>
            <div className={classes.camCursor} style={{
                position: "absolute",
                pointerEvents: "none",
                zIndex: Number.MAX_SAFE_INTEGER,
                willChange: "transform",
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`
            }}>{component}</div>
            {props.children}
        </CursorContext.Provider>
    )
}

export const DefaultCursor = () => (
    <div key={"default"}>
        <img alt="cursor" src={cursorCenter} width={100} loading="eager" style={{position: "relative", left: "-49px", top: "-28px"}}/>
    </div>
)

export const CloseCursor = () => (
    <div key={"close"}>
        <img alt="cursor" src={closeCursor} width={100} loading="eager" style={{position: "relative", left: "-49px", top: "-28px"}}/>
    </div>
)

export const CamCursor = () => (
    <div key={"cam"}>
        <img alt="cursor" src={camCursor} width={372} loading="eager" style={{position: "relative", left: "-185px", top: "-105px"}}/>
    </div>
)