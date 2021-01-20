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

export default function TournamentsPage(props) {
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
      <h1 className={classes.title}>Browse Tournaments</h1>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h3 className={classes.subtitle}>
            There are no ongoing tournaments right now. However, you can check out the game vods from 
            our past tournaments on our <a href="https://www.twitch.tv/jcs_official" target="_blank">Twitch.</a> 
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
