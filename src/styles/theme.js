import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b1b1b",
    },
    secondary: {
      main: "#f8fbff",
    },
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      // header

      fontSize: "12px",
      letterSpacing: "1px",
      wordSpacing: "2px",
      fontWeight: "400",
      textDecoration: "none solid rgb(68, 68, 68)",
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
    },
    h2: {
      // navigation

      fontSize: "14px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "500",
      textDecoration: "none solid rgb(68, 68, 68)",
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
    },
    h3: {
      //post title
      fontSize: 23,
      fontWeight: 700,
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
      letterSpacing: ".5px",
      wordSpacing: "1px",
      color: "#292b2c",
    },
    h4: {
      fontSize: "14px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "300",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#292b2c",
    },
    h5: {
      fontSize: 30,
      fontWeight: 700,
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
      letterSpacing: ".5px",
      wordSpacing: "1px",
      color: "#f8f8f8",
    },
    h6: {
      fontSize: "16px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "300",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "rgba(255, 255, 255, 0.8)",
    },
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {
      fontSize: "14px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "400",
      textDecoration: "none solid rgb(68, 68, 68)",
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize",
      textDecoration: "none",
    },
    caption: {},
    overline: {},
  },
});

theme.overrides = {
  MuiTooltip: {
    tooltip: {
      fontSize: 14,
      borderRadius: 15,
      position: "relative",
      top: -15,
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 960,
  //     lg: 1500,
  //     xl: 1600,
  //   },
  // },
};

theme.props = {
  // #action :
};

export default theme;
