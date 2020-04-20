import React, {createContext, useState, useRef, useEffect} from "react"
import {Scroll, Frame} from "framer"

export const ScrollContext = createContext(() => {
})

export default function CanvasScroll(props) {
    const wrapperRef = useRef()
    const animationRef = useRef()
    const [scrollEnabled, setScrollEnabled] = useState(true)
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    const initialScroll = props.scroll !== undefined ? props.scroll : {x: 0, y: 0}
    const [scroll, setScroll] = useState(initialScroll)

    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current) firstRender.current = false
        else {
            setAutoScrollEnabled(false)
            setScroll(initialScroll)
        }
    }, [props.reset])

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
            <Frame ref={wrapperRef} onPointerMove={handleMove} background={null} height="100%" width="100%">
                <Scroll
                    wheelEnabled={false}
                    dragEnabled={!autoScrollEnabled}
                    onDrag={() => setAutoScrollEnabled(false)}
                    onScrollStart={info => {
                        setScroll({x: info.point.x - 0.000000001, y: info.point.y - 0.000000001})
                    }}
                    scrollAnimate={autoScrollEnabled || props.reset ? scroll : undefined}
                    contentOffsetX={initialScroll.x}
                    contentOffsetY={initialScroll.y}
                    contentWidth={props.canvasEnds.right}
                    contentHeight={props.canvasEnds.bottom}
                    height="100%" width="100%"
                    direction="both">
                    {props.children}
                </Scroll>
            </Frame>
        </ScrollContext.Provider>
    )
}