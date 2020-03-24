import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles(theme => ({
  carousel: {
    width: theme.spacing(100),
    [theme.breakpoints.down("xs")]: {
      width: "100vw"
    },
    "& .carousel-inner img": {
      width: "100%"
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
        marginLeft: "5px"
      },
    },
    "& img.prevArrow, & img.nextArrow": {
      height: "100px",
      padding: theme.spacing(2.5, 5),
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        position: "static"
      }
    },
    "& img.prevArrow": {
      right: "200px",
      [theme.breakpoints.between(1000, "md")]: {
        right: "150px"
      },
      [theme.breakpoints.between("sm", 1000)]: {
        right: "100px"
      }
    },
    "& img.nextArrow": {
      left: "200px",
      [theme.breakpoints.between(1000, "md")]: {
        left: "150px"
      },
      [theme.breakpoints.between("sm", 1000)]: {
        left: "100px"
      }
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
