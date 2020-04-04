import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles(theme => ({
    carousel: {
        // height: "800px",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
            height: "auto"
        },
        "& .carousel-inner img": {
            height: "800px",
            [theme.breakpoints.only("xs")]: {
                width: "100vw",
                height: "auto"
            },
        },
        "& .carousel-indicators": {
            position: "absolute",
            bottom: "-60px"
        },
        "& .carousel-indicators li": {
            borderRadius: "100%",
            width: "4px",
            height: "4px",
            marginRight: "2px",
            marginLeft: "2px",
        },
        "& img.prevArrow, & img.nextArrow": {
            height: "100px",
            padding: theme.spacing(2.5, 5),
            position: "fixed",
            "@media (max-width: 600px)": {
                position: "fixed",
                height: "45px",
                padding: 0
            },
            "@media (max-width: 1000cco50px) and (pointer: coarse)": {
                position: "fixed",
                height: "45px",
                padding: 0
            },
            "@media (max-width: 600px) and (pointer: coarse)": {
                visibility: "hidden"
            }
        },
        "& img.prevArrow": {
            left: "150px",
            "@media (max-width: 1280px) and (min-width: 1050px)": {
                left: "40px"
            },
        },
        "& img.nextArrow": {
            right: "150px",
            "@media (max-width: 1280px) and (min-width: 1050px)": {
                right: "40px"
            },
        }
    }
}))

export default function Gallery(props) {
    const classes = useStyles()

    return (
        <Carousel
            className={classes.carousel}
            wrap={false}
            interval={null}
            indicators={true}
            touch={true}
            prevIcon={<img src={prevArrow} alt="prev" className="prevArrow"/>}
            nextIcon={<img src={nextArrow} alt="next" className="nextArrow"/>}
        >
            {props.children}
        </Carousel>
    )
}
