import { cardTitle, title } from "assets/jss/material-kit-react.js";

const homePageSectionsStyle = {
  section: {
    padding: "32px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  images: {
    width: 1000, 
    height: 400
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999",
    textAlign: "left"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default homePageSectionsStyle;
