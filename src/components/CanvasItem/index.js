import React, {useState, useRef, useEffect} from "react"
import {Frame} from "framer";

export default function CanvasItem(props) {
    const wrapperRef = useRef()
    const [offset, setOffset] = useState({x: 0, y: 0})
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)

    useEffect(() => {
        document.addEventListener("pointermove", handleMove)
        document.addEventListener("touchstart", disableScroll)
        return () => {
            document.removeEventListener("pointermove", handleMove)
            document.removeEventListener("touchstart", disableScroll)
        }
    }, [])

    const disableScroll = () => setAutoScrollEnabled(false)

    const handleMove = e => {
        e.preventDefault()
        switch (e.pointerType) {
            case "mouse":
                setAutoScrollEnabled(true)
                setOffset({
                    x: window.innerWidth / 2 - e.clientX,
                    y: window.innerHeight / 2 - e.clientY
                })
                break
            case "touch":
                setAutoScrollEnabled(false)
                break
            default:
        }
    }

    const speedMultiplier = (props.scrollSpeed !== undefined ? props.scrollSpeed : 1) / 100
    const coordinates = {
        x: offset.x * speedMultiplier,
        y: offset.y * speedMultiplier
    }
    const spring = {
        type: "spring",
        damping: 100,
        stiffness: 100
    }

    const scaler = Math.log1p(window.innerWidth / 50) * 4.4

    return (
        <Frame {...props}
               ref={wrapperRef}
               background={null}
               animate={autoScrollEnabled ? coordinates : {x: 0, y: 0}}
               transition={spring}
               style={{
                   position: "absolute",
                   left: props.left * scaler,
                   top: props.top * scaler,
                   width: props.width * scaler,
                   height: props.height * scaler,
                   fontSize: props.fontSize * scaler
               }}
        >
            {props.children}
        </Frame>
    )
}