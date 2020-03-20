import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core"
import { ButtonBase, Paper } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import Fade from "@material-ui/core/Fade"
import { DefaultCursor, CloseCursor, CursorContext } from "../Cursor"

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiButtonBase-root:focus": {
            outline: "none"
        }
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        [theme.breakpoints.down("md")]: {
            backgroundColor: "#000",
        }
    },
    paper: {
        outline: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
    }
}))

export default function Popup(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const setCursor = useContext(CursorContext)

    const handleOpen = () => {
        setOpen(true)
        setCursor(CloseCursor)
    }
    const handleClose = () => {
        setOpen(false)
        setCursor(DefaultCursor)
    }

    return (
        <div className={classes.root}>
            <ButtonBase {...props} type="button" onClick={handleOpen} disableRipple={true}>
                <img src={props.image} alt={props.alt} height={props.height} />
            </ButtonBase>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open} timeout={700}>
                    <Paper className={classes.paper} onClose={handleClose} onMouseOver={() => setCursor(DefaultCursor)} onMouseOut={() => setCursor(CloseCursor)}>
                        {props.children}
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )
}
