import React from "react"
import { CircularProgress } from "@material-ui/core"

export default function CircularLoader() {
  return (
    <div sx={{ display: 'flex' }}>
      <CircularProgress style={{color: "rgb(195, 137, 156)", width: "60px", height: "60px"}} />
    </div>
  );
}