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
    borderBottom: "1px solid rgba(227,227,227,1)",
    elevation: 0,
    backgroundColor: "#f9f7f7",
  },
  scui_nav_toolbar: {
    height: 117,
    maxHeigth: 117,
    minHeight: 117,
  },
  scui_nav_onhover: {
    "&:hover": {
      color: "#fc415e",
    },
  },

  // Nav small

  scui_box_grid: {
    border: "1px solid pink",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(633px, 1fr))",
  },
  ScuiSkillCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    color: "#fff",
    height: "100%",
    width: "100%",
    border: "1px solid pink",
    transition: "all 500ms",
    overflow: "hidden",
  },

  // components => card

  scui_card_cat: {
    position: "absolute",
    top: "7%",
    left: "7%",
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
});
