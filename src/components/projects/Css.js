import { makeStyles } from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    /*Home Page*/
    titleItem: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: "177%",
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none",
        transition: "all .3s",
        [theme.breakpoints.only("xs")]: {
            fontSize: "50%",
        },

    },
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        },
    },
    /*Video Modal*/
    containerPlayer: {
        width: "1000px",
        height: "600px",
        // [theme.breakpoints.only("md")]: {
        //     width: "100vw",
        //     maxHeight: "600px",
        // },
        // [theme.breakpoints.only("sm")]: {
        //     width: "100vw",
        //     maxHeight: "400px",
        // },
        // [theme.breakpoints.only("xs")]: {
        //     width: "100vw",
        //     maxHeight: "250px",
        // }
    },
    caption: {
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.5),
            textTransform: "uppercase",
            lineHeight: 1.2,
            [theme.breakpoints.only("xs")]: {
                fontSize: theme.spacing(1.5),
            },
            "&:first-child": {
                padding: theme.spacing(1, 0),
                fontWeight: "bold",
            }
        }
    },
    /*Image Modal*/
    containerImage: {
        height: "800px",
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
            height: "100%"
        },
        "& img": {
            height: "100%",
            [theme.breakpoints.down("xs")]: {
                width: "100%",
            }
        }
    },
    /*Carousel Modal Complex*/
    playerCarousel: {
        height: "800px",
        [theme.breakpoints.down("xs")]: {
            height: "100%",
            width: "100vw"
        },
        "& video": {
            [theme.breakpoints.down("xs")]: {
                width: "100vw"

            }
        }
    }
}))

export default Css