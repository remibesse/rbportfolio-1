import React from "react";
// import { makeStyles } from "@material-ui/core";
import intro from "./assets/intro.mp4";
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({

// }))

// function onEnded() {

// }


export default function Home() {
    // const classes = useStyles()
    // const [inProp, setInProp] = useState(false);

    return (
        <>
        {/* <CSSTransition in={inProp} timeout={200} classNames="my-node">
        </CSSTransition> */}

            <Link to="/">
                < ReactPlayer
                    playing
                    url={intro}
                    type="video/mp4"
                    playing
                    width="100vw"
                    height="100%"
                    // onEnded={onEnded}
                />
            </Link>
        </>
    )
}