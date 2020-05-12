import React, {useState, useEffect, useRef} from "react"
import {Frame} from "framer"

export default function Title(props) {
    const [tracker, setTracker] = useState({index: 0, face: true})
    const wordsArray = ["moviemaker", "imgmaker", "entertainer", "hustler"]
    const changeWordTimeout = useRef()

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
        after: {transition: {staggerChildren: 0.08}},
    }

    const letterVariants = {
        before: {
            y: 10,
            transition: {
                yoyo: Infinity,
                duration: 3
            },
        },
        after: {
            y: 0,
            transition: {
                yoyo: Infinity,
                duration: 3
            },
        },
    }

    return (
        <Frame
            background={""}
            center={"x"}
            width={500}
            height={40}
            style={{zIndex: 1300}}
        >
            <Frame
                top={"3vh"}
                height={"100%"}
                width={"100%"}
                background={""}
                style={{
                    textTransform: "uppercase",
                    fontFamily: "Jost, Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                    fontSize: "32px",
                    color: "#FFF",
                    display: "flex",
                }}
                variants={containerVariants}
                initial={"before"}
                animate={"after"}
            >
                {strings[0].map((letter, letterIndex) => (
                    <Frame key={`letter-${letterIndex}`}
                           background={""}
                           width={"auto"}
                           height={40}
                           style={{position: "relative", display: "flex"}}
                           variants={letterVariants} transition={{staggerChildren: 5}}>
                        {strings.map((string, stringIndex) => (
                            <Frame key={`letter-${stringIndex}-${letterIndex}`}
                                   width={"auto"}
                                   height={40}
                                   animate={{rotateX: stringIndex === tracker.index || letterIndex < 14 ? 0 : 90}}
                                   transition={{duration: 0.2}}
                                   background={""}
                                   style={{position: stringIndex === tracker.index ? "relative" : "absolute"}}>
                                {strings[stringIndex][letterIndex] === " " ? "\u00A0" : strings[stringIndex][letterIndex]}
                            </Frame>
                        ))}
                    </Frame>
                ))}
            </Frame>
        </Frame>
    )
}