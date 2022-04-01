import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import { COLORS } from "../../theme";
// import backgroundVideoRect from "../../media/back_square.mp4";
import backgroundVideoRect from "../../media/back_rect.mp4";
// import backgroundVideoRect from "../../media/back_bw_square.mov";
import WelcomeMessage from "./WelcomeMessage";
import { colors } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: COLORS.BLACK_MAIN },
  videoWrapper: {
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    objectFit: "cover",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [isMuted, setIsMuted] = useState(true);
  const toggleVideoSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={classes.root}>
      <video
        className={classes.videoWrapper}
        autoPlay
        loop
        muted={isMuted ? true : false}
        playsInline
        // controls=""
      >
        <source src={backgroundVideoRect} type="video/mp4" />
      </video>

      <WelcomeMessage toggleVideoSound={toggleVideoSound} />
    </div>
  );
};

export default LandingPage;
