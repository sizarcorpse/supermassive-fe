export const ThemeDistributor = (theme) => ({
  // #global
  scui_link_underline_remove: {
    textTransform: "none",
    textDecoration: "none",
  },
  // #Header
  scui_header_appbar: {
    height: 50,
    maxHeigth: 50,
    borderBottom: "1px solid rgba(227,227,227,1)",
    elevation: 0,
    backgroundColor: "#f9f7f7",
  },
  scui_header_toolbar: {
    height: 50,
    maxHeigth: 50,
    minHeight: 50,
  },
  scui_header_cal_icon: {
    height: 15,
    width: 15,
    margin: theme.spacing(1),
  },
  scui_header_iconbutton: {
    height: 35,
    width: 35,
    padding: 0,
  },
  scui_header_reaction_icon: {
    height: 25,
    width: 25,
  },

  // #Nav

  scui_nav_appbar: {
    height: 117,
    maxHeigth: 117,
    // borderBottom: "1px solid rgba(227,227,227,1)",
    elevation: 0,
    backgroundColor: "#f9f7f7",
  },
  scui_nav_toolbar: {
    height: 117,
    maxHeigth: 117,
    minHeight: 117,
  },
  scui_nav_onhover: {
    cursor: "pointer",
    "&:hover": {
      color: "#fc415e",
    },
  },

  scui_nav_subcategory: {
    "& .MuiPopover-paper": {
      width: 140,
      height: 140,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 40,
      borderTop: "3px solid #fc415e",
    },
    "& .MuiMenu-list": {
      width: "100%",
    },
  },

  // Nav small

  scui_box_grid: {
    border: "1px solid pink",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(633px, 1fr))",
  },

  // components => card

  scui_card_cat: {
    position: "absolute",
    top: "24px",
    left: "7%",
  },

  scui_swiper_card_details: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
  },

  scui_card_reaction_menu: {
    "& .MuiMenu-paper": {
      borderRadius: 50,
      padding: theme.spacing(0, 1),
      marginTop: theme.spacing(-6),
    },
  },

  flexBoxRoot: {
    display: "flex",
    flexWrap: "wrap",
    margin: "24px auto",
  },
  flexCol: {
    [theme.breakpoints.unit === "0px"]: {
      flex: "100%",
    },
  },
  try: {
    maxWidth: 840,
    width: "100%",

    "& img": {
      maxWidth: 840,
      width: "100%",
      height: "auto",
      justifySelf: "center",
      textAlign: "center",
    },

    "& p": {
      fontSize: "15px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "300",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#292b2c",
    },
    "& a": {
      fontSize: "16px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "500",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#6459ff",
    },
  },

  ScuiTextAreaLarge: {
    width: "100%",
    maxHeight: 400,
    fontSize: 15,
    border: "1px solid #d3d1d1)",
    borderRadius: 5,
    background: "rgba(232,232,232,0.3)",
    padding: 24,
  },
  PostButton: {
    borderRadius: 0,
    height: 50,
    width: 200,
    background: "#a1a1a3",
  },
});
