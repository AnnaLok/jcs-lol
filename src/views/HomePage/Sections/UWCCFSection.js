import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import uwccf1 from "assets/img/uwccf1.png"
// styling
import styles from "assets/jss/material-kit-react/views/homePageSectionsStyle.js";

const useStyles = makeStyles(styles);

export default function UWCCFSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>UWCCF</h2> 
      <h5 className={classes.description}>
        UWCCF stands for the University of Waterloo Chinese Christian Fellowship.
        We are a tight-knit group of UW students who love Jesus!
        Our desire and constant prayer is for the salvation of all 35,000 on our Waterloo campus.
        <br/>
        <br/>
      </h5>
      <img src={uwccf1} className={classes.images} alt="group 1"/>
      <br/>
      <br/>
      <br/>
      <a href="https://www.uwccf.com" target="_blank">OUR WEBSITE</a>
      <br/>
      <a href="https://www.facebook.com/groups/uwaterlooccf" target="_blank">FACEBOOK - uwccf</a>
      <br/>      
      <a href="https://www.facebook.com/groups/uwccfaux" target="_blank">FACEBOOK - CCF AUX</a>
      <br/>
      <a href="https://www.instagram.com/uwccf" target="_blank">INSTAGRAM</a>
      <br/>
    </div>
  );
}
