import React from "react";
import { makeStyles } from "@material-ui/core/";
import { Motion, spring } from 'react-motion';

const useStyles = makeStyles({
    wrapper: {
        position: "relative",
        overflow: "hidden",
        height: "100vh",    }
})

export default function CanvasScroll(props) {
    const classes = useStyles();

    const wrapperRef = React.useRef()
    const animationRef = React.useRef()
    const [mouseX, setMouseX] = React.useState()
    const [mouseY, setMouseY] = React.useState()
    const [scrollX, setScrollX] = React.useState(-props.initialFocus.x)
    const [scrollY, setScrollY] = React.useState(-props.initialFocus.y)
    const [offsetX, setOffsetX] = React.useState(0)
    const [offsetY, setOffsetY] = React.useState(0)
    const [canvasX, setCanvasX] = React.useState(0)
    const [canvasY, setCanvasY] = React.useState(0)

    React.useEffect(() => {
        setMouseX(wrapperRef.current.offsetWidth / 2)
        setMouseY(wrapperRef.current.offsetHeight / 2)
    }, [wrapperRef.current])

    React.useEffect(() => {
      const children = Array.from(wrapperRef.current.children)
      setCanvasX(Math.max(...children.map(child => child.offsetLeft + child.offsetWidth)))
      setCanvasY(Math.max(...children.map(child => child.offsetTop + child.offsetHeight)))
    })

    React.useEffect(() => {
        animationRef.current = requestAnimationFrame(scrollAnimation)
        return () => cancelAnimationFrame(animationRef.current)
    })

    const scrollAnimation = timestamp => {
        if (wrapperRef.current != null) {
            const scrollReducer = 100
            const offsetX = (wrapperRef.current.offsetWidth / 2) - mouseX
            const offsetY = (wrapperRef.current.offsetHeight / 2) - mouseY

            const translateX = Math.max(Math.min(scrollX + offsetX / scrollReducer, 0), -(canvasX - wrapperRef.current.offsetWidth))
            const translateY = Math.max(Math.min(scrollY + offsetY / scrollReducer, 0), -(canvasY - wrapperRef.current.offsetHeight))
            setScrollX(translateX)
            setScrollY(translateY)

            const offsetReducer = 10
            setOffsetX(offsetX / offsetReducer)
            setOffsetY(offsetY / offsetReducer)

            animationRef.current = requestAnimationFrame(scrollAnimation)
        }
    }

    const recordMousePosition = e => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }

    return (
        <div ref={wrapperRef} className={classes.wrapper} onMouseMove={recordMousePosition}>
            {props.children.map((child, i) => {
                const offsetMultiplier = child.props.scrollSpeed / 10
                const config = {stiffness: 100, damping: 30}
                const translateCoordinates = {
                    x: spring(scrollX + offsetX * offsetMultiplier, config),
                    y: spring(scrollY + offsetY * offsetMultiplier, config)
                }
                return <Motion key={i} style={translateCoordinates}>
                    { ({x, y}) => React.cloneElement(child, {style: {transform: `translate3d(${x}px, ${y}px, 0)`}}) }
                </Motion>
            })}
        </div>
    )
}