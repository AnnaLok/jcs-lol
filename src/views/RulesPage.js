import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax.js";
// styling
import styles from "assets/jss/material-kit-react/views/infoPages.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function RulesPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        leftLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/home_page_bkg.jpg")}>
      <h1 className={classes.title}>Rules</h1>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h3 className={classes.subtitle}>
            No worries if you don't go to UW, aren't Christian or Chinese, anyone is welcomed to sign up!
          </h3>
          <h5 className={classes.description}>
            <ul>
              <li>Each team can only have 2 diamond+ players</li>
              <li>If you need to reschedule your game, please make a request to Keqiang Pan at least 24 hours before the game</li>
              <li>If a team is late to their scheduled game by more than 15 minutes, it will count as a forfeit</li>
              <li>If a sub is needed for a game, it is okay to find anyone to play in-place (they do not have to be signed up beforehand)</li>
              <li>Whether you are participating, casting, or spectating, please treat everyone with respect!</li>
              <li>The tournament rules are subject to change upon short notice</li>
              <li>By participating, players/teams/spectators are agreeing to the rules of the tournament</li>
              <li>In case of any dispute, the tournament casters'/organizer’s decision is final. No further disputes will be entertained</li>
            </ul>
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}
