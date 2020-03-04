import React from "react";
import { makeStyles } from "@material-ui/core/";
import { Button, Paper } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100vh",
    },
    paper: {
        outline: "none",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        backgroundColor: 'transparent',
        boxShadow: "none"
    },
}))

export default function Popup(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button type="button" onClick={handleOpen} className={classes.block} >
                <img src={props.image} alt={props.alt} style={props.style} />
                <Typography style={{ top: "171px", left: "18px" }}>Adidas</Typography>
                <Typography style={{ top: "200px", left: "39px" }}>Reboosted</Typography>   
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper className={classes.paper} onClick={handleClose}>
                        {props.children}
                    </Paper>
                </Fade>
            </Modal>
        </>
    )
}
