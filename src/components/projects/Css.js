import {makeStyles} from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    /*Home Page*/
    item: {
        "&:hover": {
            zIndex: 1000,
        }
    },
    cover: {
        transition: "all 0.5s",
        opacity: .7,
        "&:hover": {
            opacity: 1,
            transform: "scale(1.04)"
        }
    },

    /*Video in the Modal*/
    videoWrapper: {
        position: "relative",
        pointerEvents: "auto",
        paddingBottom: "56.25%",
        paddingTop: theme.spacing(3.1),
        height: 0,
        width: "65vw",
        "@media only screen and (max-width: 1200px) and (min-width: 601px)": {
            width: "90vw",
        },
        "@media only screen and (max-width: 600px)": {
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
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.1),
            lineHeight: 1.2,
            "&:first-child": {
                padding: theme.spacing(1, 0),
            },
            "@media (max-width: 1200px) and (min-width: 601px)": {
                fontSize: theme.spacing(1.9),
            },
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(1.5),
            },
        }
    }
}))

export default Css