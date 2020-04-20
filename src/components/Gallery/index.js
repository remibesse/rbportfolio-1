import React, {cloneElement, useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import indicators from "./assets/indicators.svg"
import {Page} from "framer"

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        height: "85vh",
        width: "60vw",
    },
    gallery: {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        width: "auto",
        "& div": {
            pointerEvents: "none",
        },
        "& [data-framer-component-type='Frame']": {
            position: "relative",
            alignItems: "center",
            height: "85vh !important",
            width: "60vw !important",
            overflow: "visible !important",
            "@media only screen and (max-width: 600px)": {
                overflow: "hidden",
                width: "100vw !important"
            }
        }
    },
    controls: {
        height: "120px",
        textAlign: "center",
        pointerEvents: "auto",
        "@media only screen and (max-width: 600px) and (pointer: coarse)": {
            display: "none",
        },
    },
    nextArrow: props => ({
        visibility: props.currentPage === props.pageCount - 1 ? "hidden" : "visible",
        zIndex: "100",
        opacity: 0.5,
        padding: theme.spacing(4, 5),
        "&:hover": {
            opacity: 1
        },
        "@media only screen and (max-width: 850px)": {
            padding: theme.spacing(4, 2),
        },
        "@media only screen and (max-width: 600px)": {
            position: "fixed",
            right: 0
        },
    }),
    prevArrow: props => ({
        visibility: props.currentPage === 0 ? "hidden" : "visible",
        zIndex: "100",
        opacity: 0.5,
        padding: theme.spacing(4, 5),
        "&:hover": {
            opacity: 1
        },
        "@media only screen and (max-width: 850px)": {
            padding: theme.spacing(4, 2),
        },
        "@media only screen and (max-width: 600px)": {
            position: "fixed",
            left: 0,
        },
    }),
    indicatorsWrapper: {
        alignSelf: "flex-end"
    },
    indicators: {
        width: "4px",
        height: "4px",
        marginRight: "2px",
        marginLeft: "2px",
        "@media only screen and (pointer: fine)": {
            display: "none",
        },
        "@media only screen and (min-width: 600px) and (pointer: coarse)": {
            display: "none",
        },
    }
}))

export default function Gallery(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const classes = useStyles({currentPage, pageCount: props.children.length})
    const nextItem = () => setCurrentPage(Math.min(currentPage + 1, props.children.length - 1))
    const prevItem = () => setCurrentPage(Math.max(currentPage - 1, 0))

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [currentPage])

    const handleKeyDown = e => {
        if (e.key === "ArrowRight") nextItem()
        else if (e.key === "ArrowLeft") prevItem()
    }

    const handleClick = i =>
        i === currentPage + 1 ? nextItem :
            (i === currentPage - 1 ? prevItem :
                () => {
                })

    const scaleEffect = info => ({
        scale: 1 - 0.3 * Math.abs(info.normalizedOffset)
    })

    return (
        <div className={classes.root}>
            <div className={classes.gallery}>
                <img src={prevArrow} alt="prev" onClick={prevItem}
                     className={`${classes.controls} ${classes.prevArrow}`}/>
                <Page currentPage={currentPage}
                      onChangePage={(current, previous) => setCurrentPage(current)}
                      effect={scaleEffect}
                      alignment="center">
                    {props.children.map((child, i) => cloneElement(child, {
                        onClick: handleClick(i)
                    }))}
                </Page>
                <img src={nextArrow} alt="next" onClick={nextItem}
                     className={`${classes.controls} ${classes.nextArrow}`}/>
            </div>
            <div className={classes.indicatorsWrapper}>
                {props.children.map((child, i) => <img src={indicators} alt="dot" className={classes.indicators}
                                                       style={i === currentPage ? {opacity: "1"} : {opacity: "0.5"}}/>)}
            </div>
        </div>
    )
}