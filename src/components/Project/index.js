import React, { useState, useContext, useEffect } from "react"
import { Route, Link, useHistory } from "react-router-dom"
import { makeStyles, IconButton } from "@material-ui/core"
import { DefaultCursor, CloseCursor, CamCursor, CursorContext } from "../Cursor"
import Backdrop from "@material-ui/core/Backdrop"
import { Fade, Modal, Paper } from "@material-ui/core"
import { ScrollContext } from "../CanvasScroll"
import IconClose from "./assets/close-cursor.svg"

const useStyles = makeStyles(theme => ({
    imagesEffect: {
        "& img": {
            transition: "all 0.4s",
        },
        "& img:hover": {
            transform: "scale(1.04)"
        }
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        [theme.breakpoints.down("xs")]: {
            backgroundColor: "#000",
        }
    },
    paper: {
        backgroundColor: "transparent",
        outline: "none",
        boxShadow: "none",
    },
    closeButton: {
        position: "absolute",
        top: "50px",
        right: "50px",
        zIndex: 1000,
        [theme.breakpoints.down("xs")]: {
            top: "8px",
            right: "8px"
        },
        [theme.breakpoints.between("sm", "md")]: {
            top: "20px",
            right: "20px"
        },
        [theme.breakpoints.up("md")]: {
            visibility: "hidden"
        },
    }
}))

export default function Project(props) {
    const setCursor = useContext(CursorContext)

    const classes = useStyles()
    return (
        <>
            <Link to={`/project/${props.id}`} onMouseDown={() => setCursor(CamCursor)} onMouseUp={() => setCursor(DefaultCursor)}>
                <div className={classes.imagesEffect}>
                    <img src={props.image} alt={props.alt} height={props.height} />
                </div>
            </Link>
            <Route path={`/project/${props.id}`}>
                <Popup>{props.children}</Popup>
            </Route>
        </>
    )
}

function Popup(props) {
    const classes = useStyles()
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const setCursor = useContext(CursorContext)
    const setScrollEnabled = useContext(ScrollContext)
    const fadeDuration = 700

    useEffect(() => {
        setOpen(true)
        setScrollEnabled(false)
        setCursor(CloseCursor)
    }, [])
    const handleClose = () => {
        setScrollEnabled(true)
        setCursor(DefaultCursor)
        setOpen(false)
        setTimeout(() => history.push("/home"), fadeDuration)
    }

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: fadeDuration, className: classes.backdrop }}
        >
            <Fade in={open} timeout={fadeDuration}>
                <Paper className={classes.paper} onClose={handleClose} onMouseOver={() => setCursor(DefaultCursor)} onMouseOut={() => setCursor(CloseCursor)}>
                    {props.children}
                    <IconButton aria-label="Close" onClick={handleClose} className={classes.closeButton}><img alt="cursor" src={IconClose} width={25} /></IconButton>
                </Paper>
            </Fade>
        </Modal>
    )
}