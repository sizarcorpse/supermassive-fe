import React, { useState } from "react";
import { motion } from "framer-motion";
import getConfig from "next/config";
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import {
  withStyles,
  CssBaseline,
  Grid,
  Typography,
  IconButton,
  Box,
  Hidden,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
} from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import { SMButton } from "@/components/UI";

const SwiperCard = (props) => {
  const {
    editorChoice: { post },
    classes,
  } = props;

  const { publicRuntimeConfig } = getConfig();

  const handleBodyCharLimit = (text) => {
    let texts = [];

    for (let i = 0; i <= 200; i++) {
      texts.push(text[i]);
    }

    return texts.join("") + "...";
  };

  return (
    <Card
      aria-label="main-card"
      style={{
        position: "relative",
        maxWidth: 1700,
        maxHeight: 860,
      }}
    >
      <Box aria-label="main-content-area">
        <Box aria-label="card-header">
          {post.cover ? (
            <Box aria-label="card-image">
              <Image
                src={`${publicRuntimeConfig.ROOT_API_URL}${post.cover.url}`}
                width={post.cover.width}
                height={post.cover.height}
              />
            </Box>
          ) : (
            <Box aria-label="card-image" maxWidth={"100%"} height={60}></Box>
          )}
        </Box>

        <Box aria-label="details" className={classes.scui_swiper_card_details}>
          <Box
            aria-label="category-button"
            display="flex"
            alignItems="flex-start"
            my={2}
          >
            {post.categories.map((category, i) => (
              <Box key={i} mr={1}>
                <SMButton variant={category.categoryName}>
                  {category.categoryName}
                </SMButton>
              </Box>
            ))}
          </Box>

          <Box aria-label="title">
            <Typography variant="h5">{post.title}</Typography>
          </Box>

          <Box aria-label="body-preview" my={2} width="50%">
            <Typography variant="h6">
              {handleBodyCharLimit(post.body)}
            </Typography>
          </Box>

          <Box aria-label="foot" my={2} display="flex">
            <Box
              aria-label="popup-reactions"
              display="flex"
              mr={3}
              alignItems="center"
            >
              <IconButton>
                <ThumbUpOutlinedIcon />
              </IconButton>

              <Typography variant="h6">{post.reactions}</Typography>
            </Box>

            <Box aria-label="view-comment" display="flex" alignItems="center">
              <Box aria-label="view" display="flex" alignItems="center" mr={3}>
                <IconButton>
                  <VisibilityOutlinedIcon />
                </IconButton>
                <Typography variant="h6">{post.views}</Typography>
              </Box>
              <Box
                aria-label="comment"
                display="flex"
                alignItems="center"
                mr={3}
              >
                <IconButton>
                  <CommentOutlinedIcon />
                </IconButton>
                <Typography variant="h6">{post.totalComments}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mx={1}>
                <Avatar
                  src={`${publicRuntimeConfig.ROOT_API_URL}${
                    post.uploader.userPhoto && post.uploader.userPhoto.url
                  }`}
                ></Avatar>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h6">{post.uploader.username}</Typography>
                <Typography variant="h6" style={{ margin: "0px 5px" }}>
                  |
                </Typography>
                <Typography variant="h6">
                  {formatDistanceToNow(new Date(post.createdAt))}
                </Typography>
              </Box>
            </Box>
          </Box>
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
)(SwiperCard);
