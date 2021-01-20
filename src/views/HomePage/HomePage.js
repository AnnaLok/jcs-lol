import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax.js";
// styling
import styles from "assets/jss/material-kit-react/views/homePage.js";
// Sections for this page
import ProductSection from "./Sections/AboutSection.js";
import TeamSection from "./Sections/UWCCFSection.js";
import WorkSection from "./Sections/GospelSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
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
      <Parallax filter image={require("assets/img/home_page_bkg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Jesus Championship Series</h1>
              <h4>
                A for fun League of Legends tournament hosted by UWCCF.
              </h4>
              <br />
              <Link to={"/sign-up"}>
                <Button className={classes.button}
                  color="primary"
                  size="lg"
                  href="/"
                  target="_blank"
                >
                    <i className="fas fa-play" />
                  Sign up
                </Button>
              </Link>
              <Link to={"/touraments"}>
                <Button className={classes.button}
                  color="primary"
                  size="lg"
                  href="/"
                  target="_blank"
                >
                  <i className="fas fa-play" />
                  Browse Tournaments
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
