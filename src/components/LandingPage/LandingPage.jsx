import React, { useState } from "react";
import { VolumeUpIcon, VolumeOffIcon } from "@heroicons/react/outline";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";

import { COLORS } from "../../theme";
import backgroundVideoRect from "../../media/back_rect.mp4";
import WelcomeMessage from "./WelcomeMessage";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: COLORS.BLACK_MAIN },
  videoWrapper: {
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    objectFit: "cover",
  },
  soundButtonWrapper: {
    position: "absolute",
    bottom: (props) => (props.isXS ? 26 : 24),
    left: (props) => (props.isXS ? 8 : 24),
    "& .soundButton": {
      "& .volume-icon": {
        color: COLORS.WHITE_MAIN,
        fill: "none",
        height: 32,
        width: 32,
      },
    },
    "& .MuiButton-root": {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const LandingPage = () => {
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles({ isXS });
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

      <div className={classes.soundButtonWrapper}>
        <Button
          onClick={toggleVideoSound}
          className="soundButton"
          disableRipple
        >
          {isMuted ? (
            <SvgIcon
              component={VolumeOffIcon}
              viewBox="0 0 24 24"
              className="volume-icon"
            />
          ) : (
            <SvgIcon
              component={VolumeUpIcon}
              viewBox="0 0 24 24"
              className="volume-icon"
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
