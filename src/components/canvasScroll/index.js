import React, {createContext, useState, useRef, useEffect} from "react"
import {makeStyles} from "@material-ui/core/"
import {Motion, spring} from "react-motion"

const useStyles = makeStyles({
    wrapper: {
        position: "relative",
        overflow: "hidden",
        touchAction: "none"
    }
})

export const ScrollContext = createContext(() => {
})

export default function CanvasScroll(props) {
    const classes = useStyles()

    const wrapperRef = useRef()
    const canvasRef = useRef()
    const animationRef = useRef()
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
    const [mouseScrollEnabled, setMouseScrollEnabled] = useState(false)
    const [mouse, setMouse] = useState({x: 0, y: 0})
    const [scroll, setScroll] = useState(
        props.scroll !== undefined ?
            {x: -props.scroll.x, y: -props.scroll.y} :
            {x: 0, y: 0}
    )
    const [previousTouch, setPreviousTouch] = useState({x: 0, y: 0})

    useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const scrollMouseAnimation = timestamp => {
        if (mouseScrollEnabled && autoScrollEnabled && wrapperRef.current != null && canvasRef.current != null) {
            const scrollReducer = (props.scrollSpeed !== undefined ? props.scrollSpeed : 15) / 1000
            const translate = {
                x: (wrapperRef.current.offsetWidth / 2) - mouse.x,
                y: (wrapperRef.current.offsetHeight / 2) - mouse.y
            }

            scrollBy(translate.x * scrollReducer, translate.y * scrollReducer)

            animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        }
    }

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    const scrollBy = (x, y) => {
        const children = Array.from(canvasRef.current.children)
        const canvasXEnd = Math.max(...children.map(child => child.offsetLeft + child.offsetWidth))
        const canvasYEnd = Math.max(...children.map(child => child.offsetTop + child.offsetHeight))

        setScroll({
            x: clamp(scroll.x + x, -(canvasXEnd - wrapperRef.current.offsetWidth), 0),
            y: clamp(scroll.y + y, -(canvasYEnd - wrapperRef.current.offsetHeight), 0)
        })
    }

    const recordPointerPosition = e => {
        e.preventDefault()
        switch (e.pointerType) {
            case "mouse":
                setMouseScrollEnabled(true)
                setMouse({x: e.clientX, y: e.clientY})
                break
            case "touch":
                scrollBy(e.clientX - previousTouch.x, e.clientY - previousTouch.y)
                recordPointerStart(e)
                break
            default:
        }
    }

    const recordPointerStart = e => {
        e.preventDefault()
        if (e.pointerType === "touch") {
            setMouseScrollEnabled(false)
            setPreviousTouch({x: e.clientX, y: e.clientY})
        }
    }

    const config = {stiffness: 100, damping: 30}
    const coordinates = (mouseScrollEnabled ?
        {x: spring(scroll.x, config), y: spring(scroll.y, config)} :
        scroll)

    return (
        <ScrollContext.Provider value={setAutoScrollEnabled}>
            <div {...props}
                 ref={wrapperRef}
                 className={`${classes.wrapper} ${props.className}`}
                 onPointerDown={recordPointerStart}
                 onPointerMove={recordPointerPosition}
            >
                <Motion style={coordinates}>
                    {({x, y}) =>
                        <div ref={canvasRef} style={{transform: `translate3d(${x}px, ${y}px, 0)`}}>
                            {props.children}
                        </div>
                    }
                </Motion>
            </div>
        </ScrollContext.Provider>
    )
}