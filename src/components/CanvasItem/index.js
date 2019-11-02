import React, {useState, useRef, useEffect} from "react"
import {Motion, spring} from "react-motion"

export default function CanvasItem(props) {
    const wrapperRef = useRef()
    const animationRef = useRef()
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const [scrollSpeed, setScrollSpeed] = useState(props.scrollSpeed)

    useEffect(() => {
        document.addEventListener("mousemove", recordMousePosition)
        document.addEventListener("touchstart", disableScroll)
        setMouseX(document.body.clientWidth / 2)
        setMouseY(document.body.clientHeight / 2)
        return () => {
            document.removeEventListener("mousemove", recordMousePosition)
            document.removeEventListener("touchstart", disableScroll)
        }
    }, [])

    useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const scrollAnimation = timestamp => {
        if (wrapperRef.current != null) {
            setOffsetX((document.body.clientWidth / 2) - mouseX)
            setOffsetY((document.body.clientHeight / 2) - mouseY)

            animationRef.current = requestAnimationFrame(scrollAnimation)
        }
    }

    const disableScroll = () => setScrollSpeed(0)

    const recordMousePosition = e => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    const config = {stiffness: 100, damping: 30}
    const speedMultiplier = (props.scrollSpeed !== undefined ? scrollSpeed : 1) / 100
    const coordinates = {
        x: spring(offsetX * speedMultiplier, config),
        y: spring(offsetY * speedMultiplier, config)
    }

    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4

    return (
        <Motion style={coordinates}>
            {({x, y}) =>
                <div {...props}
                     ref={wrapperRef}
                     className={props.className}
                     style={{
                         position: "absolute",
                         left: props.left * scaler,
                         top: props.top * scaler,
                         width: props.width * scaler,
                         height: props.height * scaler,
                         fontSize: props.fontSize * scaler,
                         transform: `translate3d(${x}px, ${y}px, 0)`,
                         ...props.style
                     }}
                >
                    {props.children}
                </div>
            }
        </Motion>
    )
}