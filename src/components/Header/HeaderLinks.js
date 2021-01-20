/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.navLink}>
            Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/rules"} className={classes.navLink}>
          Rules
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/sign-up"} className={classes.navLink}>
            Sign Up
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.navLink}>
            Browse Tournaments
        </Link>
      </ListItem>
    </List>
  );
}
