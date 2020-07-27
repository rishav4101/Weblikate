import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
    paddingTop: "300px",
    textAlign: "center",
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color: "#fff", fontSize: "200px" }} />
      <br /> <br />
      <img
        src="/logo.png"
        alt="."
        style={{
          height: "70px",
          margin: "50px auto",
          position: "relative",
        }}
      />
    </div>
  );
}
