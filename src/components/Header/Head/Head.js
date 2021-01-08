import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import {
  withStyles,
  CssBaseline,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Hidden,
  SvgIcon,
  Tooltip,
} from "@material-ui/core";
import { motion } from "framer-motion";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

import { Angry } from "@/assets/icons";
import { Haha } from "@/assets/icons";
import { Love } from "@/assets/icons";
import { Sad } from "@/assets/icons";
import { Wow } from "@/assets/icons";
import { Like } from "@/assets/icons";

const Head = (props) => {
  const { classes, closeMe, handleNavSmallModalClose } = props;
  const router = useRouter();
  return (
    <Grid container component="main">
      <CssBaseline />
      <AppBar
        position="static"
        className={classes.scui_header_appbar}
        elevation={0}
      >
        <Toolbar className={classes.scui_header_toolbar}>
          <Hidden xsDown>
            <Grid
              item
              xs={false}
              sm={5}
              md={3}
              lg={2}
              xl={2}
              style={{ borderRight: "1px solid #e3e3e3" }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <DateRangeIcon
                  color="primary"
                  className={classes.scui_header_cal_icon}
                />

                <Typography variant="h1" color="primary">
                  Wednesday, December 23
                </Typography>
              </Box>
            </Grid>
          </Hidden>
          <Grid
            item
            xs={6}
            sm={7}
            md={9}
            lg={9}
            xl={9}
            style={{ borderRight: "1px solid #e3e3e3" }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Hidden smDown>
                <Box flexGrow={1} flexShrink={1}>
                  <Box display="flex">
                    {["Home", "Archive", "Contact"].map((m, i) => (
                      <Box key={i} mx={1}>
                        <Typography variant="h1" color="primary">
                          {m}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Hidden>
              <Hidden mdDown>
                <Box display="flex" flexGrow={1}>
                  <Typography variant="h1" color="primary">
                    This is supermassive black hole aha!!
                  </Typography>
                </Box>
              </Hidden>

              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                mx={1}
                ml="auto"
              >
                <Tooltip title="Like">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="/posts/reaction/like">
                        <IconButton className={classes.scui_header_iconbutton}>
                          <Like />
                        </IconButton>
                      </Link>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Haha">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="/posts/reaction/haha">
                        <IconButton className={classes.scui_header_iconbutton}>
                          <Haha />
                        </IconButton>
                      </Link>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Love">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="/posts/reaction/love">
                        <IconButton className={classes.scui_header_iconbutton}>
                          <Love />
                        </IconButton>
                      </Link>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Sad">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="/posts/reaction/sad">
                        <IconButton className={classes.scui_header_iconbutton}>
                          <Sad />
                        </IconButton>
                      </Link>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Angry">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="/posts/reaction/angry">
                        <IconButton className={classes.scui_header_iconbutton}>
                          <Angry />
                        </IconButton>
                      </Link>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Wow">
                  <Box display="Wow">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="/posts/reaction/wow">
                        <IconButton className={classes.scui_header_iconbutton}>
                          <Wow />
                        </IconButton>
                      </Link>
                    </motion.div>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={2} md={1} lg={1} xl={1}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              p={1}
            >
              {closeMe === true ? (
                <CloseIcon
                  color="primary"
                  onClick={() => {
                    handleNavSmallModalClose(false);
                  }}
                />
              ) : (
                <SearchIcon color="primary" />
              )}
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Head);
