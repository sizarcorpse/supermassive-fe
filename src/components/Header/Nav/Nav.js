import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// import NavSmall from "./NavSmall";

import { ThemeDistributor } from "@/styles/ThemeDistributor";
import {
  withStyles,
  CssBaseline,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Hidden,
  MenuItem,
  Menu,
  Avatar,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const Nav = (props) => {
  const { classes } = props;

  // #action : category menu
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(null);

  const handleCategoryMenuOpen = (event) => {
    setCategoryMenuOpen(event.currentTarget);
  };
  const handleCategoryMenuClose = () => {
    setCategoryMenuOpen(null);
  };

  // #action modal
  const [navSmallModalOpen, setNavSmallModalOpen] = useState(false);

  const handleNavSmallModalOpen = () => {
    setNavSmallModalOpen(true);
  };

  const handleNavSmallModalClose = () => {
    setNavSmallModalOpen(false);
  };

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <AppBar
          position="static"
          elevation={0}
          className={classes.scui_nav_appbar}
        >
          <Toolbar className={classes.scui_nav_toolbar}>
            <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
              <Box display="flex" justifyContent="center">
                <Typography variant="h6" color="primary">
                  suppermassive
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={6} lg={8} xl={8}>
              <Hidden mdDown>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Box display="flex">
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.scui_nav_onhover}
                        >
                          Home
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2} onClick={handleCategoryMenuOpen}>
                      <Typography
                        variant="h2"
                        color="primary"
                        className={classes.scui_nav_onhover}
                      >
                        Categories
                      </Typography>
                    </Box>
                    <Menu
                      id="simple-menu"
                      className={classes.scui_nav_subcategory}
                      anchorEl={categoryMenuOpen}
                      keepMounted
                      open={Boolean(categoryMenuOpen)}
                      onClose={handleCategoryMenuClose}
                    >
                      <MenuItem
                        onClick={handleCategoryMenuClose}
                        className={classes.scui_nav_onhover}
                      >
                        <Link
                          href="/posts/funny"
                          className={classes.scui_link_underline_remove}
                        >
                          <Typography
                            variant="h2"
                            color="primary"
                            className={classes.scui_nav_onhover}
                          >
                            Funny News
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={handleCategoryMenuClose}
                        className={classes.scui_nav_onhover}
                      >
                        <Link
                          href="/posts/viral"
                          className={classes.scui_link_underline_remove}
                        >
                          <Typography
                            variant="h2"
                            color="primary"
                            className={classes.scui_nav_onhover}
                          >
                            Viral
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={handleCategoryMenuClose}
                        className={classes.scui_nav_onhover}
                      >
                        <Link
                          href="/posts/featured"
                          className={classes.scui_link_underline_remove}
                        >
                          <Typography
                            variant="h2"
                            color="primary"
                            className={classes.scui_nav_onhover}
                          >
                            Featured
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={handleCategoryMenuClose}
                        className={classes.scui_nav_onhover}
                      >
                        <Link
                          href="/posts/gallery"
                          className={classes.scui_link_underline_remove}
                        >
                          <Typography
                            variant="h2"
                            color="primary"
                            className={classes.scui_nav_onhover}
                          >
                            Gallery
                          </Typography>
                        </Link>
                      </MenuItem>
                    </Menu>
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.scui_nav_onhover}
                        >
                          Post by Reaction
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.scui_nav_onhover}
                        >
                          Archive
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.scui_nav_onhover}
                        >
                          Sample Page
                        </Typography>
                      </Link>
                    </Box>
                    <Box m={2}>
                      <Link
                        href="/"
                        className={classes.scui_link_underline_remove}
                      >
                        <Typography
                          variant="h2"
                          color="primary"
                          className={classes.scui_nav_onhover}
                        >
                          Contact Form
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Hidden>
              <Box
                display={{
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "none",
                  xl: "none",
                }}
                justifyContent="flex-end"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <IconButton onClick={handleNavSmallModalOpen}>
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Modal
                  className={classes.modal}
                  open={navSmallModalOpen}
                  onClose={handleNavSmallModalClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={navSmallModalOpen}>
                    {/* <NavSmall
                      handleNavSmallModalClose={handleNavSmallModalClose}
                    /> */}
                  </Fade>
                </Modal>
              </Box>
            </Grid>

            <Grid item xs={4} sm={4} md={3} lg={2} xl={2}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box display="flex" alignItems="center" mx={2}>
                  <Avatar src="https://w.wallhaven.cc/full/j3/wallhaven-j38xpq.jpg"></Avatar>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="h1" color="primary">
                    sign in | sign up
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Nav);
