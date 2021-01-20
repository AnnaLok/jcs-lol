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

export default function SignUpPage(props) {
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
      <h1 className={classes.title}>Sign Up</h1>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h3 className={classes.subtitle}>SIGN UP CLOSED</h3>
          <h5 className={classes.description}>
            Sorry, it is too late to sign up for the W2021 tournament because it has already finished. 
            However, you can check out the game vods on our 
            <a href="https://www.twitch.tv/jcs_official" target="_blank">Twitch.</a> 
            <br/>
            Stay tuned for the next JCS in S2021. Sign ups will be available right after W2021 term ends.
            If you don't want to miss it, follow our  <a href="https://www.facebook.com/groups/uwccfaux" target="_blank">Facebook - CCF AUX</a> for announcements and updates. 
          </h5>
          <h5 className={classes.description}>
            <ul>
              <li>You can sign up as a team of 5-7 (2 subs) or as an individual</li>
              <li>Note that if you are signed up as an individual, we will try our best to place you on a team, but no guarantees</li>
              <li>Sign up as a team, individual player, or caster </li>
            </ul>
          </h5>
        </div>
      </div>
      <Footer />
    </div>
  );
}
