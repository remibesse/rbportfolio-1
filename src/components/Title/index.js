import React, {useState, useEffect, useRef} from "react"
import {Frame} from "framer"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    fontSize: {
        fontSize: "32px",
        "@media only screen and (max-width: 600px)": {
            fontSize: "20px",
        }
    }
})

export default function Title() {
    const [tracker, setTracker] = useState({index: 0, face: true})
    const wordsArray = ["moviemaker", "imgmaker", "entertainer", "hustler"]
    const changeWordTimeout = useRef()
    const classes = useStyles()

    useEffect(() => {
        changeWordTimeout.current = setTimeout(
            () => setTracker({index: (tracker.index + 1) % wordsArray.length, face: !tracker.face}),
            tracker.index === 0 ? 10000 : 5000
        )
        return () => clearTimeout(changeWordTimeout.current)
    }, [tracker])

    const strings = wordsArray.map(word => {
        const numSpaceToAdd = Math.max(...wordsArray.map(word => word.length)) - word.length
        return Array.from("Your favorite " + word + " ".repeat(numSpaceToAdd))
    })

    const containerVariants = {
        before: {},
        after: {transition: {staggerChildren: 0.15}},
    }

    const letterVariants = {
        before: {
            y: 5,
            transition: {
                yoyo: Infinity,
                duration: 3,
                ease: "easeInOut"
            },
        },
        after: {
            y: 0,
            transition: {
                yoyo: Infinity,
                duration: 3,
                ease: "easeInOut"
            },
        }
    }

    return (
        <Frame
            center={"x"}
            top={"3vh"}
            width={"auto"}
            height={32}
            background={""}
            variants={containerVariants}
            style={{
                fontFamily: "Jost, Helvetica, Arial, sans-serif",
                fontWeight: 600,
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
                       variants={letterVariants}
                >
                    {strings.map((string, stringIndex) => (
                        <Frame key={`letter-${stringIndex}-${letterIndex}`}
                               width={"auto"}
                               height={"100%"}
                               perspective={1000}
                               animate={{rotateX: stringIndex === tracker.index || letterIndex < 14 ? 0 : 90}}
                               transition={{duration: 0.45}}
                               background={""}
                               style={{position: stringIndex === tracker.index ? "relative" : "absolute"}}>
                            {strings[stringIndex][letterIndex] === " " ? "\u00A0" : strings[stringIndex][letterIndex]}
                        </Frame>
                    ))}
                </Frame>
            ))}
        </Frame>
    )
}