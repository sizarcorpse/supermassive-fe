import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import getConfig from "next/config";
import useSWR from "swr";
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import Image from "next/image";
import SwiperMini from "@/components/Swiper/SwiperMini";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/router";
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
  Divider,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import { SMButton } from "@/components/UI";
import PopUpReaction from "./PopUpReaction";
const PostsCard = (props) => {
  const { classes, postx } = props;
  const router = useRouter();

  const { publicRuntimeConfig } = getConfig();

  const { data: post } = useSWR(
    `${publicRuntimeConfig.ROOT_API_URL}/posts/${postx._id}`,
    {
      initialData: postx,
      revalidateOnFocus: false,
    }
  );

  const handleBodyCharLimit = (text) => {
    let texts = [];

    for (let i = 0; i <= 100; i++) {
      texts.push(text[i]);
    }

    return texts.join("") + "...";
  };

  // reaction popUp open
  const [reactionPopUpMenuOpen, setReactionPopUpMenuOpen] = useState(null);

  const handleReactionPopUpMenuOpen = (event) => {
    setReactionPopUpMenuOpen(event.currentTarget);
  };
  const handleReactionPopUpMenuClose = () => {
    setReactionPopUpMenuOpen(null);
  };

  return (
    <Card
      aria-label="main-card"
      style={{
        position: "relative",
        margin: "16px 16px",
        maxWidth: 405,
      }}
    >
      <Box aria-label="main-content-area">
        <Box aria-label="card-header">
          {post.gallery.length > 0 ? (
            <SwiperMini photos={post.gallery} />
          ) : post.cover ? (
            <Box aria-label="card-image">
              <Image
                src={`${publicRuntimeConfig.ROOT_API_URL}${post.cover.url}`}
                width={post.cover.width}
                height={post.cover.height}
              />
            </Box>
          ) : (
            <Box aria-label="card-image" maxWidth={405} height={60}></Box>
          )}
        </Box>
        <Box
          aria-label="category-button"
          display="flex"
          alignItems="flex-start"
          className={classes.scui_card_cat}
        >
          {post.categories.map((category, i) => (
            <Box key={i} mr={1}>
              <SMButton variant={category.categoryName}>
                <Link
                  href={{
                    pathname: `/posts/${category.categoryName}`,
                  }}
                >
                  <Typography variant="button" style={{ fontSize: 13 }}>
                    {category.categoryName}
                  </Typography>
                </Link>
              </SMButton>
            </Box>
          ))}
        </Box>

        <Box
          aria-label="uploader"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          height={50}
          mx={3}
          my={1}
        >
          <Box display="flex" alignItems="center" mx={1}>
            <Avatar
              src={`${publicRuntimeConfig.ROOT_API_URL}${
                post.uploader && post.uploader.userPhoto.url
              }`}
            ></Avatar>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="h1" color="primary">
              {post.uploader.username}
            </Typography>
            <Typography
              variant="h1"
              color="primary"
              style={{ margin: "0px 8px" }}
            >
              |
            </Typography>
            <Typography variant="h1" color="primary">
              {formatDistanceToNow(new Date(post.createdAt))}
            </Typography>
          </Box>
        </Box>

        <Box aria-label="title" mx={3} my={2}>
          <Link href={`/post/${post.id}`}>
            <Typography variant="h3" style={{ cursor: "pointer" }}>
              {post.title}
            </Typography>
          </Link>
        </Box>

        <Box aria-label="body-preview" mx={3} my={3}>
          <Typography variant="h4">{handleBodyCharLimit(post.body)}</Typography>
        </Box>
        <Divider style={{ margin: "0px 24px" }} />

        <Box aria-label="foot" mx={3} my={3} display="flex">
          <Box
            aria-label="popup-reactions"
            display="flex"
            flexGrow={1}
            alignItems="center"
          >
            <IconButton onMouseEnter={handleReactionPopUpMenuOpen}>
              <ThumbUpOutlinedIcon />
            </IconButton>
            <Menu
              className={classes.scui_card_reaction_menu}
              id="simple-menu"
              anchorEl={reactionPopUpMenuOpen}
              keepMounted
              open={Boolean(reactionPopUpMenuOpen)}
              onClose={handleReactionPopUpMenuClose}
            >
              <PopUpReaction post={post} />
            </Menu>
            <Typography variant="h4">{post.reactions}</Typography>
          </Box>

          <Box aria-label="view-comment" display="flex" alignItems="center">
            <Box aria-label="view" display="flex" alignItems="center" mx={1}>
              <IconButton>
                {" "}
                <VisibilityOutlinedIcon />
              </IconButton>
              <Typography variant="h4">{post.views}</Typography>
            </Box>
            <Box aria-label="comment" display="flex" alignItems="center" mx={1}>
              <IconButton>
                {" "}
                <CommentOutlinedIcon />
              </IconButton>
              <Typography variant="h4">{post.totalComments}</Typography>
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
)(PostsCard);
