import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import getConfig from "next/config";
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import useSWR, { trigger, mutate } from "swr";
import { giveReaction } from "@/actions/UpdatePosts";

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
  const { publicRuntimeConfig } = getConfig();

  const handleReaction = async (reaction) => {
    mutate(
      `${publicRuntimeConfig.ROOT_API_URL}/posts/${post._id}`,
      { ...post, reactions: post.reactions + 1 },
      false
    );
    await giveReaction({ postId: post.id, reaction: reaction });
    trigger(`${publicRuntimeConfig.ROOT_API_URL}/posts/${post._id}`);
  };

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
            <IconButton
              className={classes.scui_header_iconbutton}
              onClick={() => handleReaction("like")}
            >
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
              <Haha onClick={() => handleReaction("haha")} />
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
              <Love onClick={() => handleReaction("love")} />
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
              <Sad onClick={() => handleReaction("sad")} />
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
              <Angry onClick={() => handleReaction("angry")} />
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
              <Wow onClick={() => handleReaction("wow")} />
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
