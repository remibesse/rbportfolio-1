import React from "react"
import ReactPlayer from "react-player"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import Carousel from "../../carousel"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg";

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
        <CanvasItem top="140px" left="1500px" scrollSpeed={19} className={classes.item} >
            <Popup image={complex} alt="Complex" height="380px">
                <Carousel>
                    <ReactPlayer
                        url={complexVideo}
                        controls
                        playing
                        loop
                        muted
                        height="100%"
                    />
                    <img src={zoneb} alt="Zone B" />
                    <img src={falcon} alt="Falcon" />
                    <img src={whitesmall} alt="White Small" />
                </Carousel>
            </Popup>
            <ImageTitle top="300px" left="20px">Complex</ImageTitle>
        </CanvasItem>
    )
}

