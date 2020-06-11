import React, {useState, useEffect, useRef} from "react"
import {Frame} from "framer"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>({
    fontSize: {
        fontSize: theme.spacing(4),
        "@media (max-width: 1000px) and (pointer: coarse) and (orientation: landscape)": {
            fontSize: theme.spacing(3)
        },
        "@media (max-width: 640px)": {
            fontSize: theme.spacing(3)
        },
        "@media (max-width: 450px)": {
            fontSize: theme.spacing(2.5)
        },
        "@media (max-width: 350px)": {
            fontSize: theme.spacing(2)
        }
    }
}))

export default function Title() {
    const [tracker, setTracker] = useState({index: 0, face: true})
    const wordsArray = ["moviemaker", "imgmaker", "entertainer", "hustler"]
    const changeWordTimeout = useRef()
    const classes = useStyles()
    const changeFontTimeout = useRef()
    const [font, setFont] = useState(true)

    useEffect(() => {
        changeWordTimeout.current = setTimeout(
            () => setTracker({index: (tracker.index + 1) % wordsArray.length, face: !tracker.face}),
            tracker.index === 0 ? 10000 : 5000
        )
        changeFontTimeout.current = setTimeout(() => setFont(!font), 5000)
        return () => {
            clearTimeout(changeWordTimeout.current)
            clearTimeout(changeFontTimeout.current)
        }
    }, [tracker])

    const strings = wordsArray.map(word => {
        const numSpaceToAdd = Math.max(...wordsArray.map(word => word.length)) - word.length
        return Array.from("Your favorite " + word + " ".repeat(numSpaceToAdd))
    })

    const containerVariants = {
        before: {},
        after: {transition: {staggerChildren: 0.15}},
    }


    const fontStyle = font ? {fontFamily: "'Archivo Black', sans-serif"} : {fontFamily: "'Space Mono', monospace"}

    return (
        <Frame
            center={"x"}
            top={"3vh"}
            width={"auto"}
            height={32}
            background={""}
            variants={containerVariants}
            style={{
                textTransform: "uppercase",
                color: "#FFF",
                display: "flex",
                zIndex: 1300
            }}
            className={classes.fontSize}
            initial={"before"}
            animate={"after"}
        >
            {strings[0].map((letter, letterIndex) => (
                <Frame key={`letter-${letterIndex}`}
                       background={""}
                       width={"auto"}
                       height={"100%"}
                       style={{position: "relative", display: "flex"}}
                >
                    {strings.map((string, stringIndex) => (
                        <Frame key={`letter-${stringIndex}-${letterIndex}`}
                               width={"auto"}
                               height={"100%"}
                               perspective={1000}
                               animate={{rotateX: stringIndex === tracker.index || letterIndex < 14 ? 0 : 90}}
                               transition={{duration: 0.35}}
                               background={""}
                               style={{...fontStyle, position: stringIndex === tracker.index ? "relative" : "absolute"}}>
                            {strings[stringIndex][letterIndex] === " " ? "\u00A0" : strings[stringIndex][letterIndex]}
                        </Frame>
                    ))}
                </Frame>
            ))}
        </Frame>
    )
}