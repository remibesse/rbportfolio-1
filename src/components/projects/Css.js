import {makeStyles} from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    /*Home Page*/
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        }
    },
    titleItem: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: "inherit",
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none",
        transition: "all .3s",
    },

    /*Video in the Modal*/
    videoWrapper: {
        position: "relative",
        paddingBottom: "56.25%",
        paddingTop: "25px",
        height: 0,
        width: "60vw",
        "@media only screen and (max-width: 1200px) and (min-width: 601px)": {
            width: "80vw",
        },
        "@media (max-width: 600px)": {
            width: "100vw",
        },
        "& iframe": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
    },
    caption: {
        display: "inline-block",
        "& .MuiTypography-root":
            {
                fontSize: theme.spacing(2.1),
                textTransform: "uppercase",
                lineHeight: 1.2,
                "&:first-child": {
                    padding: theme.spacing(1, 0),
                    fontWeight: "bold",
                },
                "@media (max-width: 600px)": {
                    fontSize: theme.spacing(1.5),
                },
            }
    },

    /*Image in the Modal*/
    portraitFormat: {
        "& img": {
            maxHeight: "85vh",
            height: "auto",
            maxWidth: "100%",
        }
    },
    landscapeFormat: {
        "& img": {
            maxHeight: "75vh",
            height: "auto",
            maxWidth: "100%",
        }
    }

}))

export default Css