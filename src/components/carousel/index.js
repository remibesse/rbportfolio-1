import React from "react"
import Slider from "react-slick"
import { makeStyles } from "@material-ui/core/styles"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"

const useStyles = makeStyles(theme => ({
    slider: {
        width: "800px",
        "& img, #player": {
            height: "100%",
            width: "100%",
        },
        "& .slick-list": {
            textAlign: "center",
        },
        "& .slick-arrow.slick-next:before": {
            visibility: "hidden",
        },
        "& .slick-arrow.slick-prev:before": {
            display: "none"
        },
        "& .slick-arrow": {
            cursor: "none"
        },
        "& .slick-disabled": {
            opacity: "0",
            pointerEvents: "none"
        },
        "& .slick-prev": {
            left: "-100px"
        },
        "& .slick-next": {
            right: "-100px"
        }
    }
}))

function NextArrow(props) {
    const { className, onClick } = props;

    return (
        <div
            className={className}
            style={{ height: "55px", padding: "20px 40px" }}
            onClick={onClick}
        >
            <img src={nextArrow} alt="next" ></img>
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;

    return (
        <div
            className={className}
            style={{ height: "55px", padding: "20px 40px" }}
            onClick={onClick}
        >
            <img src={prevArrow} alt="prev" style={{ height: "55px", padding: "20px 40px" }}></img>
        </div>
    );
}

export default function Carousel(props) {
    const classes = useStyles()
   
    const sliderSettings = {
        fade: true,
        centerMode: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <Slider {...sliderSettings} className={classes.slider}>
            {props.children}
        </Slider>
    )
}


