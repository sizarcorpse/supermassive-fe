import React, { useState } from "react";
import { motion } from "framer-motion";
import getConfig from "next/config";
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import marked from "marked";
import ReactMarkdown from "react-markdown";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import {
  withStyles,
  Box,
  Card,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";

const ViewPostDetails = (props) => {
  const { post, classes } = props;
  const { publicRuntimeConfig } = getConfig();

  console.log(marked(post.body));

  return (
    <Card style={{ margin: "0px 24px" }}>
      <Box aria-label="main-content" width="100%">
        {post.cover ? (
          <Box
            aria-label="cover-photo"
            width="100%"
            display="flex"
            justifyContent="center"
            style={{
              backgroundImage: `url(${publicRuntimeConfig.ROOT_API_URL}${post.cover.formats.large.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backdropFilter: "blur(100px)",
              maxHeight: 920,
            }}
          >
            <Image
              src={`${publicRuntimeConfig.ROOT_API_URL}${post.cover.url}`}
              height={post.cover.formats.large.height}
              width={post.cover.formats.large.width}
            />
          </Box>
        ) : null}
        <Box aria-label="title" my={2} mx={4}>
          <Typography
            variant="h3"
            style={{ fontSize: "2.5em", fontWeight: "400" }}
          >
            {post.title}
          </Typography>
        </Box>
        <Box
          aria-label="uploader"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mx={4}
        >
          <Box display="flex" alignItems="center" mr={1}>
            <Avatar
              src={`${publicRuntimeConfig.ROOT_API_URL}${
                post.uploader && post.uploader.userPhoto.url
              }`}
            ></Avatar>
          </Box>
          <Box display="flex" alignItems="center" mx={1}>
            <Typography
              variant="h1"
              color="primary"
              style={{ fontSize: "1em" }}
            >
              {post.uploader.username}
            </Typography>
            <Typography
              variant="h1"
              color="primary"
              style={{ margin: "0px 16px", fontSize: "1em" }}
            >
              |
            </Typography>
            <Typography
              variant="h1"
              color="primary"
              style={{ fontSize: "1em" }}
            >
              {formatDistanceToNow(new Date(post.createdAt))}
            </Typography>
          </Box>
          <Typography
            variant="h1"
            color="primary"
            style={{ margin: "8px 8px", fontSize: "1em" }}
          >
            |
          </Typography>
          <Box aria-label="view-comment" display="flex" alignItems="center">
            <Box aria-label="view" display="flex" alignItems="center" mx={1}>
              <Typography variant="h4">{post.views} views</Typography>
            </Box>
          </Box>
        </Box>

        <Box aria-label="body" my={2} mx={4}>
          <div>
            <ReactMarkdown children={post.body} className={classes.try} />
          </div>
        </Box>
      </Box>
    </Card>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(ViewPostDetails);
// marked(post.body)
// wordWrap: "break-word",
// whiteSpace: "pre-line",
// style={{ wordWrap: "break-word", whiteSpace: "pre-line" }}
