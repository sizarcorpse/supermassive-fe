import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import getConfig from "next/config";
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
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  Divider,
} from "@material-ui/core";

import { Angry } from "@/assets/icons";
import { Haha } from "@/assets/icons";
import { Love } from "@/assets/icons";
import { Sad } from "@/assets/icons";
import { Wow } from "@/assets/icons";
import { Like } from "@/assets/icons";

const PopUpReaction = (props) => {
  const { classes, post } = props;

  //${publicRuntimeConfig.ROOT_API_URL}${post.cover.url}

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      ml="auto"
      style={{ borderRadius: 50 }}
    >
      <Tooltip title="Like">
        <Box display="flex">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton className={classes.scui_header_iconbutton}>
              <Like />
            </IconButton>
          </motion.div>
        </Box>
      </Tooltip>
      <Tooltip title="Haha">
        <Box display="flex">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton className={classes.scui_header_iconbutton}>
              <Haha />
            </IconButton>
          </motion.div>
        </Box>
      </Tooltip>
      <Tooltip title="Love">
        <Box display="flex">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton className={classes.scui_header_iconbutton}>
              <Love />
            </IconButton>
          </motion.div>
        </Box>
      </Tooltip>
      <Tooltip title="Sad">
        <Box display="flex">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton className={classes.scui_header_iconbutton}>
              <Sad />
            </IconButton>
          </motion.div>
        </Box>
      </Tooltip>
      <Tooltip title="Angry">
        <Box display="flex">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton className={classes.scui_header_iconbutton}>
              <Angry />
            </IconButton>
          </motion.div>
        </Box>
      </Tooltip>
      <Tooltip title="Wow">
        <Box display="Wow">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton className={classes.scui_header_iconbutton}>
              <Wow />
            </IconButton>
          </motion.div>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(PopUpReaction);
