import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/";
import { Motion, spring } from 'react-motion';

const useStyles = makeStyles({
    wrapper: {
        position: "relative",
        overflow: "hidden"
    }
})

export default function CanvasScroll(props) {
    const classes = useStyles();

    const wrapperRef = useRef()
    const canvasRef = useRef()
    const animationRef = useRef()
    const [mouseY, setMouseY] = useState(0)
    const [mouseX, setMouseX] = useState(0)
    const [scrollX, setScrollX] = useState(props.initialFocus.x ? -props.initialFocus.x : 0)
    const [scrollY, setScrollY] = useState(props.initialFocus.y ? -props.initialFocus.y : 0)

    useEffect(() => {
        setMouseX(wrapperRef.current.offsetWidth / 2)
        setMouseY(wrapperRef.current.offsetHeight / 2)
    }, [])

    useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const scrollAnimation = timestamp => {
        if (wrapperRef.current != null && canvasRef.current != null) {
            const scrollReducer = 1000 / (props.scrollSpeed ? props.scrollSpeed : 15)
            const translateX = (wrapperRef.current.offsetWidth / 2) - mouseX
            const translateY = (wrapperRef.current.offsetHeight / 2) - mouseY

            const children = Array.from(canvasRef.current.children)
            const canvasWidth = Math.max(...children.map(child => child.offsetLeft + child.offsetWidth))
            const canvasHeight = Math.max(...children.map(child => child.offsetTop + child.offsetHeight))

            setScrollX(Math.max(Math.min(scrollX + translateX / scrollReducer, 0), -(canvasWidth - wrapperRef.current.offsetWidth)))
            setScrollY(Math.max(Math.min(scrollY + translateY / scrollReducer, 0), -(canvasHeight - wrapperRef.current.offsetHeight)))

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
        <div ref={wrapperRef} className={`${classes.wrapper} ${props.className}`} onMouseMove={recordMousePosition} style={props.style}>
            <Motion style={coordinates}>
                {({ x, y }) =>
                    <div ref={canvasRef} style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}>{props.children}</div>
                }
            </Motion>
        </div>
    )
}