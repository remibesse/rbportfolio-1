import React, {useState, useContext, useEffect} from "react"
import {Route, Link, useHistory} from "react-router-dom"
import {makeStyles, IconButton} from "@material-ui/core"
import {DefaultCursor, CloseCursor, CamCursor, CursorContext} from "../Cursor"
import Backdrop from "@material-ui/core/Backdrop"
import {Fade, Modal, Paper} from "@material-ui/core"
import {ScrollContext} from "../CanvasScroll"
import IconClose from "./assets/close-cursor.svg"

const useStyles = makeStyles({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        "@media only screen and (pointer: coarse)": {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
        }
    },
    paper: {
        backgroundColor: "transparent",
        outline: "none",
        boxShadow: "none",
    },
    closeButton: {
        position: "absolute",
        top: "30px",
        right: "40px",
        zIndex: 1000,
        "@media only screen and (max-width: 600px) and (pointer: coarse)": {
            top: "8px",
            right: "8px"
        },
        "@media only screen and (max-width: 1000px) and (pointer: coarse) and (orientation: landscape)": {
            top: "5px",
            right: "5px"
        },
        "@media only screen and (pointer: fine)": {
            display: "none"
        }
    }
})

export default function Project(props) {
    const classes = useStyles()
    const setCursor = useContext(CursorContext)

    return (
        <>
            <Link to={`/project/${props.id}`}
                  onPointerDown={() => setCursor(CamCursor)}
                  onPointerUp={() => setCursor(DefaultCursor)}
            >{props.cover}</Link>
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
    const setAutoScrollEnabled = useContext(ScrollContext)
    const fadeDuration = 700

    useEffect(() => {
        setOpen(true)
        setAutoScrollEnabled(false)
        setCursor(CloseCursor)
        return () => {
            setAutoScrollEnabled(true)
            setCursor(DefaultCursor)
        }
    }, [])

    const handleClose = () => {
        setOpen(false)
        setAutoScrollEnabled(true)
        setCursor(DefaultCursor)
        setTimeout(() => history.push("/home"), fadeDuration)
    }

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout: fadeDuration, className: classes.backdrop}}
        >
            <Fade in={open} timeout={fadeDuration}>
                <Paper className={classes.paper}
                       onClose={handleClose}
                       onPointerOver={() => setCursor(DefaultCursor)}
                       onPointerOut={() => setCursor(CloseCursor)}
                >
                    {props.children}
                    <IconButton aria-label="Close" onClick={handleClose} className={classes.closeButton}>
                        <img alt="cursor" src={IconClose} width={25}/>
                    </IconButton>
                </Paper>
            </Fade>
        </Modal>
    )
}