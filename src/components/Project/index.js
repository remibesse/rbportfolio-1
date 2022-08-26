import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { makeStyles, IconButton } from "@material-ui/core"
import { CursorContext } from "../Cursor"
import CamCursor from "../Cursor/CamCursor"
import IconClose from "./assets/close-cursor.svg"
import { motion } from "framer-motion"
import Adidas from "../projects/Adidas"
import Streets from "../projects/Streets"
import Faces from "../projects/Faces"
import Complex from "../projects/Complex"
import GiveAFuck from "../projects/GiveAFuck"
import AccorHotels from "../projects/AccorHotels"
import Budweiser from "../projects/Budweiser"
import Havana from "../projects/Havana"
import LeConsulat from "../projects/LeConsulat"
import Vladimir from "../projects/Vladimir"
import Oboy from "../projects/Oboy"
import Sdm from "../projects/Sdm"
import Nike from "../projects/Nike"
import Ichon from "../projects/Ichon"
import Girl from "../projects/Girl"
import Red from "../projects/Red"
import Print from "../projects/Print"
import Stylist1 from "../projects/Stylist1"
import Stylist2 from "../projects/Stylist2"
import Vimsml from "../projects/Vimsml"
import PsgJordan from "../projects/PsgJordan"
import Yeux from "../projects/Yeux"
import Cavani from "../projects/Cavani"
import Breathe from "../projects/Breathe"
import Etudes from "../projects/Etudes"
import Overall from "../projects/Overall"
import Moleskine from "../projects/Moleskine"
import Ras from "../projects/Ras"
import Lala from "../projects/Lala"
import Lacoste from "../projects/Lacoste"


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
        zIndex: 1300,
        padding: "40px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        overflow: "scroll",
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
    adidas: <Adidas />,
    streets: <Streets />,
    faces: <Faces />,
    complex: <Complex />,
    giveAFuck: <GiveAFuck />,
    accorHotels: <AccorHotels />,
    budweiser: <Budweiser />,
    havana: <Havana />,
    leconsulat: <LeConsulat />,
    vladimir: <Vladimir />,
    oboy: <Oboy />,
    sdm: <Sdm />,
    nike: <Nike />,
    ichon: <Ichon />,
    girl: <Girl />,
    red: <Red />,
    print: <Print />,
    stylist1: <Stylist1 />,
    stylist: <Stylist2 />,
    vimsml: <Vimsml />,
    psgJordan: <PsgJordan />,
    yeux: <Yeux />,
    cavini: <Cavani />,
    breathe: <Breathe />,
    etudes: <Etudes />,
    overall: <Overall />,
    moleskine: <Moleskine />,
    ras: <Ras />,
    lala: <Lala />,
    lacoste: <Lacoste />


}

export default function Project({ id }) {
    const classes = useStyles()
    const setCursor = useContext(CursorContext)

    useEffect(() => {
        return () => setCursor(CamCursor("initial"))
    }, [])

    return (
        <Link to={"/home"}>
            <motion.div key={`project-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onPointerOver={() => setCursor(CamCursor("close"))}
                className={classes.backdrop}
            >
                {projects[id]}
                <IconButton aria-label="Close" className={classes.closeButton}>
                    <img alt="cursor" src={IconClose} width={25} />
                </IconButton>
            </motion.div>
        </Link>
    )
}