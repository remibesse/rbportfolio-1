import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import Carousel from "../../carousel"
import fuck from "./assets/fuck.jpg"
import dimanche from "./assets/dimanche.jpg"
import giveafuck from "./assets/giveafuck.jpg"

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
        <CanvasItem top="580px" left="1350px" scrollSpeed={13} className={classes.item}>
        <Popup image={giveafuck} alt="Give a fuck" height="420px">
            <Carousel>
                <img src={dimanche} alt="Give a fuck" />
                <img src={fuck} alt="Share more consume less" />
            </Carousel>
        </Popup>
        <ImageTitle top="300px" left="24px">Give</ImageTitle>
        <ImageTitle top="327px" left="25px">A Fuck</ImageTitle>
    </CanvasItem>
    )
}

