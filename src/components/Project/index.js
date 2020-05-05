import React, {useState, useContext, useEffect} from "react"
import {Route, Link, useHistory, useLocation} from "react-router-dom"
import {makeStyles, IconButton} from "@material-ui/core"
import {CursorContext} from "../Cursor"
import DefaultCursor from "../Cursor/DefaultCursor"
import {ScrollContext} from "../CanvasScroll"
import IconClose from "./assets/close-cursor.svg"
import {motion} from "framer-motion"
import Adidas from "../projects/Adidas"
import Streets from "../projects/Streets"
import Faces from "../projects/Faces"
import Complex from "../projects/Complex"
import GiveAFuck from "../projects/GiveAFuck"
import AccorHotels from "../projects/AccorHotels"
import Budweiser from "../projects/Budweiser"
import Havana from "../projects/Havana"

const useStyles = makeStyles({
    backdrop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        "@media only screen and (pointer: coarse)": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
        }
    },
    closeButton: {
        position: "absolute",
        top: "30px",
        right: "40px",
        zIndex: 1000,
        "@media only screen and (max-width: 600px) and (pointer: coarse)": {
            top: "0px",
            right: "3px"
        },
        "@media only screen and (max-width: 1000px) and (pointer: coarse) and (orientation: landscape)": {
            top: "5px",
            right: "5px"
        },
        "@media only screen and (pointer: fine)": {
            display: "none"
        }
    },
})

const projects = {
    adidas: <Adidas/>,
    streets: <Streets/>,
    faces: <Faces/>,
    complex: <Complex/>,
    giveAFuck: <GiveAFuck/>,
    accorHotels: <AccorHotels/>,
    budweiser: <Budweiser/>,
    havana: <Havana/>
}

export default function Project({id}) {
    const classes = useStyles()
    const history = useHistory()
    const setCursor = useContext(CursorContext)
    const setAutoScrollEnabled = useContext(ScrollContext)

    useEffect(() => {
        setAutoScrollEnabled(false)
        return () => {
            setAutoScrollEnabled(true)
            setCursor(DefaultCursor({close: false}))
        }
    }, [])

    const handleClose = e => {
        e.preventDefault()
        e.stopPropagation()
        setAutoScrollEnabled(true)
        history.push("/home")
    }

    return (
        <motion.div key={`project-${id}`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    onPointerDown={handleClose}
                    onPointerOver={() => setCursor(DefaultCursor({close: true}))}
                    className={classes.backdrop}
        >
            {projects[id]}
            <IconButton aria-label="Close" onPointerDown={handleClose} className={classes.closeButton}>
                <img alt="cursor" src={IconClose} width={25}/>
            </IconButton>
        </motion.div>
    )
}