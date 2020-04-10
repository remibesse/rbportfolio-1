import React, {createContext, useState, useRef, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Scroll} from "framer"

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
    const animationRef = useRef()
    const [scrollEnabled, setScrollEnabled] = useState(true)
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const initialScroll = props.scroll !== undefined ? props.scroll : {x: 0, y: 0}
    const [scroll, setScroll] = useState(initialScroll)
    const [canvasEnds, setCanvasEnds] = useState({right: 0, bottom: 0})
    // const marginsSafe = props.margins !== undefined ? {
    //     left: props.margins.left !== undefined ? props.margins.left : 0,
    //     right: props.margins.right !== undefined ? props.margins.right : 0,
    //     top: props.margins.top !== undefined ? props.margins.top : 0,
    //     bottom: props.margins.bottom !== undefined ? props.margins.bottom : 0
    // } : {left: 0, right: 0, top: 0, bottom: 0}
    // const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4

    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current) firstRender.current = false
        else {
            setAutoScrollEnabled(false)
            setScroll(initialScroll)
        }
    }, [props.reset])

    // useEffect(() => {
    //     const children = Array.from(wrapperRef.current.children[0].children)
    //     setCanvasEnds({
    //         right: -Math.max(...children.map(child => child.offsetLeft + child.offsetWidth)) + wrapperRef.current.offsetWidth,
    //         bottom: -Math.max(...children.map(child => child.offsetTop + child.offsetHeight)) + wrapperRef.current.offsetHeight,
    //     })
    // }, [scroll])

    const handleMove = e => {
        e.preventDefault()
        switch (e.pointerType) {
            case "mouse":
                setAutoScrollEnabled(true)
                setMousePosition({x: e.clientX, y: e.clientY})
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
        if (scrollEnabled && autoScrollEnabled && wrapperRef.current != null) {
            const scrollReducer = (props.scrollSpeed !== undefined ? props.scrollSpeed : 55) / 4000
            const translate = {
                x: (wrapperRef.current.offsetWidth / 2) - mousePosition.x,
                y: (wrapperRef.current.offsetHeight / 2) - mousePosition.y
            }

            setScroll({
                x: clamp(scroll.x + translate.x * scrollReducer, -props.canvasEnds.right + wrapperRef.current.offsetWidth, 0),
                y: clamp(scroll.y + translate.y * scrollReducer, -props.canvasEnds.bottom + wrapperRef.current.offsetHeight, 0)
            })
            animationRef.current = requestAnimationFrame(scrollMouseAnimation)
        }
    }

    return (
        <ScrollContext.Provider value={setScrollEnabled}>
            <div ref={wrapperRef} onPointerMove={handleMove} style={{height: "100vh"}}>
                <Scroll onScrollStart={info => {setScroll({x: info.point.x - 0.000000001, y: info.point.y - 0.000000001})}}
                        scrollAnimate={autoScrollEnabled || props.reset ? scroll : undefined}
                        contentOffsetX={initialScroll.x}
                        contentOffsetY={initialScroll.y}
                        contentWidth={props.canvasEnds.right}
                        contentHeight={props.canvasEnds.bottom}
                        height="100%" width="100%"
                        direction="both">
                    {props.children}
                </Scroll>
            </div>
        </ScrollContext.Provider>
    )
}