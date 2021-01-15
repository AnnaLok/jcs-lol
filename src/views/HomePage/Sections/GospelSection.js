import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/views/homePageSections/GospelStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>The Gospel</h2> 
      <h5 className={classes.description}>
        TODO: Paragraph about the gospel.
      </h5>
    </div>
  );
}
