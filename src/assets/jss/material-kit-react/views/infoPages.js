import { container, title } from "assets/jss/material-kit-react.js";

const infoPagesStyle = {
  container: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    },
    ... container
  },
  description: {
    margin: "1.071rem auto 0",
    padding: "0 0 2rem 0",
    color: "black",
    textAlign: "left"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-200px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "-64px",
    marginLeft: "32px",
    minHeight: "32px",
    color: "#FFFFFF !important",
    textDecoration: "none",
    zIndex: 2
  },
  subtitle: {
    margin: "1.071rem auto 0",
    padding: "2rem 0",
    color: "black",
    textAlign: "left"
  }
};

export default infoPagesStyle;