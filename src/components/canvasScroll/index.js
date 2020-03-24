import React, { createContext, useState, useRef, useEffect } from "react"
import { makeStyles } from "@material-ui/core/"
import { Motion, spring } from "react-motion"

const useStyles = makeStyles({
    wrapper: {
        position: "relative",
        overflow: "hidden",
        // "@media (pointer: coarse)": {
        //     overflow: "auto",
        // }
    }
})

export const ScrollContext = createContext(() => { })

export default function CanvasScroll(props) {
    const classes = useStyles();

    const wrapperRef = useRef()
    const canvasRef = useRef()
    const animationRef = useRef()
    const [scrollEnabled, setScrollEnabled] = useState(true)
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [scrollX, setScrollX] = useState(props.scrollX !== undefined ? props.scrollX : 0)
    const [scrollY, setScrollY] = useState(props.scrollY !== undefined ? props.scrollY : 0)

    useEffect(() => {
        setMouseX(wrapperRef.current.offsetWidth / 2)
        setMouseY(wrapperRef.current.offsetHeight / 2)
    }, [])

    useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const scrollAnimation = timestamp => {
        if (scrollEnabled && wrapperRef.current != null && canvasRef.current != null) {
            const scrollReducer = (props.scrollSpeed !== undefined ? props.scrollSpeed : 15) / 1000
            const translateX = (wrapperRef.current.offsetWidth / 2) - mouseX
            const translateY = (wrapperRef.current.offsetHeight / 2) - mouseY

            const children = Array.from(canvasRef.current.children)
            const canvasXStart = Math.min(...children.map(child => child.offsetLeft))
            const canvasXEnd = Math.max(...children.map(child => child.offsetLeft + child.offsetWidth))
            const canvasYStart = Math.min(...children.map(child => child.offsetTop))
            const canvasYEnd = Math.max(...children.map(child => child.offsetTop + child.offsetHeight))

            setScrollX(Math.max(Math.min(scrollX + translateX * scrollReducer, -canvasXStart), -(canvasXEnd - wrapperRef.current.offsetWidth)))
            setScrollY(Math.max(Math.min(scrollY + translateY * scrollReducer, -canvasYStart), -(canvasYEnd - wrapperRef.current.offsetHeight)))

            animationRef.current = requestAnimationFrame(scrollAnimation)
        }
    }

    const recordMousePosition = e => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    const config = { stiffness: 100, damping: 30 }
    const coordinates = {
        x: spring(scrollX, config),
        y: spring(scrollY, config)
    }

    return (
        <ScrollContext.Provider value={setScrollEnabled}>
            <div {...props} ref={wrapperRef} className={`${classes.wrapper} ${props.className}`} onMouseMove={recordMousePosition}>
                <Motion style={coordinates}>
                    {({ x, y }) =>
                        <div ref={canvasRef} style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}>{props.children}</div>
                    }
                </Motion>
            </div>
        </ScrollContext.Provider>
    )
}