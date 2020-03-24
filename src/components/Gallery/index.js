import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles(theme => ({
  carousel: {
    height: "800px",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      height: "auto"
    },
    "& .carousel-inner img": {
      height: "800px",
      [theme.breakpoints.down("xs")]: {
        width: "100vw",
        height: "auto"
      },
    },
    "& .carousel-indicators": {
      position: "absolute",
      bottom: "-60px"
    },
    "& .carousel-indicators li": {
      [theme.breakpoints.up("sm")]: {
        visibility: "hidden"
      },
      [theme.breakpoints.down("sm")]: {
        visibility: "visible",
        width: "10px",
        marginRight: "5px",
        marginLeft: "5px",
        height: "2px"
      },
    },
    "& img.prevArrow, & img.nextArrow": {
      height: "100px",
      padding: theme.spacing(2.5, 5),
      position: "fixed",
      [theme.breakpoints.down("sm")]: {
        position: "static"
      }
    },
    "& img.prevArrow": {
      left: "150px",
      [theme.breakpoints.only("md")]: {
        left: "50px"
      }
    },
    "& img.nextArrow": {
      right: "150px",
      [theme.breakpoints.only("md")]: {
        right: "50px"
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
      fade={true}
      indicators={true}
      touch={true}
      nextIcon={<img src={nextArrow} alt="next" className="nextArrow" />}
      prevIcon={<img src={prevArrow} alt="prev" className="prevArrow" />}
    >
      {props.children}
    </Carousel>
  )
}
