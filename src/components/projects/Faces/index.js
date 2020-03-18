import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import Carousel from "../../carousel"
import b from "./assets/b.jpg"
import duo from "./assets/duo.jpg"
import face from "./assets/face.jpg"
import portrait from "./assets/portrait.jpg"
import quatro from "./assets/quatro.jpg"
import faces from "./assets/faces.jpg"


const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        "& .MuiTypography-root": {
            position: "absolute",
            color: theme.palette.text.primary,
            fontSize: theme.spacing(3.6),
            textTransform: "uppercase",
            fontWeight: "bold"
        }
    },
    caption: {
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.5),
            textTransform: "uppercase",
            lineHeight: 1.2,
            "&:first-child": {
                padding: theme.spacing(1, 0),
                fontWeight: "bold",
            }
        }
    },
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        },
    },
}))

export default function Home(props) {
    const classes = useStyles()

    return (
        <CanvasItem top="450px" left="0px" scrollSpeed={16} className={classes.item}>
            <Popup image={faces} alt="Faces" height="500px">
                <Carousel>
                    <img src={b} alt="Face" />
                    <img src={quatro} alt="Quatro" />
                    <img src={face} alt="Face" />
                    <img src={portrait} alt="Portrait" />
                    <img src={duo} alt="Duo" />
                </Carousel>
            </Popup>
            <ImageTitle top="395px" left="320px" style={ props.isHover ? {fontSize: "50px"} : {fontSize: "29px"}}>Faces</ImageTitle>
        </CanvasItem>
    )
}

