import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import styles from "assets/jss/material-kit-react/views/homePageSectionsStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About</h2>
      <h5 className={classes.description}>
        JCS started in 2019, with its first season in the winter term. 
        For the past 3 terms, UWCCF has been hosting in-house League of Legends tournaments. 
        This platform allows players and spectators to browse tournament information, schedules, game results, and game vods.
        <br/>
        <br/>
      </h5>
      <a href="https://www.twitch.tv/jcs_official" target="_blank">TWITCH</a>
    </div>
  );
}
