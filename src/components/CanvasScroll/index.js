import React, {createContext, useState, useRef, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {useSpring, animated} from 'react-spring'
import {useGesture} from 'react-use-gesture'

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
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const initialScroll = props.scroll !== undefined ? props.scroll : {x: 0, y: 0}
    const [scroll, setScroll] = useState(initialScroll)
    const springScroll = useSpring(scroll)
    const [canvasEnds, setCanvasEnds] = useState({right: 0, bottom: 0})
    const marginsSafe = props.margins !== undefined ? {
        left: props.margins.left !== undefined ? props.margins.left : 0,
        right: props.margins.right !== undefined ? props.margins.right : 0,
        top: props.margins.top !== undefined ? props.margins.top : 0,
        bottom: props.margins.bottom !== undefined ? props.margins.bottom : 0
    } : {left: 0, right: 0, top: 0, bottom: 0}

    const bind = useGesture({
            onDrag: ({movement: [x, y]}) => setScroll({x, y}),
            onMove: ({xy: [x, y], event}) => setMousePosition({x, y})
        },
        {
            drag: {
                initial: () => [springScroll.x.get(), springScroll.y.get()],
                bounds: {
                    left: canvasEnds.right - marginsSafe.right,
                    right: marginsSafe.left,
                    top: canvasEnds.bottom - marginsSafe.bottom,
                    bottom: marginsSafe.top
                },
                rubberband: true
            }
        }
    )

    useEffect(() => {
        const children = Array.from(canvasRef.current.children)
        setCanvasEnds({
            right: -Math.max(...children.map(child => child.offsetLeft + child.offsetWidth)) + wrapperRef.current.offsetWidth,
            bottom: -Math.max(...children.map(child => child.offsetTop + child.offsetHeight)) + wrapperRef.current.offsetHeight,
        })
    }, [scroll])

    const handleMove = e => {
        e.preventDefault()
        switch (e.pointerType) {
            case "mouse":
                setAutoScrollEnabled(true)
                break
            case "touch":
                setAutoScrollEnabled(false)
                break
            default:
        }
    }

    useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    const scrollMouseAnimation = () => {
        if (autoScrollEnabled && wrapperRef.current != null) {
            const scrollReducer = (props.scrollSpeed !== undefined ? props.scrollSpeed : 55) / 1000
            const translate = {
                x: (wrapperRef.current.offsetWidth / 2) - mousePosition.x,
                y: (wrapperRef.current.offsetHeight / 2) - mousePosition.y
            }

            setScroll({
                x: clamp(springScroll.x.get() + translate.x * scrollReducer, canvasEnds.right - marginsSafe.right, marginsSafe.left),
                y: clamp(springScroll.y.get() + translate.y * scrollReducer, canvasEnds.bottom - marginsSafe.bottom, marginsSafe.top)
            })
            animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        }
    }

    return (
        <div {...props} {...bind()} onPointerMove={handleMove} ref={wrapperRef}
             className={`${classes.wrapper} ${props.className}`}>
            <animated.div ref={canvasRef} style={springScroll}>{props.children}</animated.div>
        </div>
    )
}