import { useEffect } from "react";

export const useVideoPlayback = (videoRef) => {
    useEffect(() => {
        if (videoRef !== undefined) {
            videoRef.current.play()
                .catch((err1) => {
                    console.log(err1);
                    videoRef.current.muted = true;
                    videoRef.current.play();
                })
                .catch((err2) => {
                    console.log(err2);
                });
        }
    }, [videoRef]);
};