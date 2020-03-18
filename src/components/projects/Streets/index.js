import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import Carousel from "../../carousel"
import streets from "./assets/streets.jpg"
import streets1 from "./assets/streets1.jpg"
import streets2 from "./assets/streets2.jpg"
import streets3 from "./assets/streets3.jpg"

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
        <CanvasItem top="0px" left="1330px" scrollSpeed={13} className={classes.item}>
        <Popup image={streets} alt="Streets" height="400px">
            <Carousel>
                <div>
                    <img src={streets1} alt="Streets" />
                </div>
                <div>
                    <img src={streets2} alt="Streets" />
                </div>
                <div>
                    <img src={streets3} alt="Streets" />
                </div>
            </Carousel>
        </Popup>
        <ImageTitle top="320px" left="50px">Streets</ImageTitle>
    </CanvasItem>
    )
}

