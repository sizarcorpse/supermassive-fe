// #next :
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";
// #contexts :

// #hooks :

// #components :
import { SMButton } from "@/components/UI";
import { Gallery } from "../Gallery";
import { Contact } from "../Contact";

// #validations :

// #material-ui :
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import {
  withStyles,
  Box,
  Card,
  Typography,
  Avatar,
  Grid,
  CssBaseline,
} from "@material-ui/core";

// #other :
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import ReactMarkdown from "react-markdown";

// #mainFunction :

const ViewPostDetails = (props) => {
  const { post, classes } = props;
  const { publicRuntimeConfig } = getConfig();

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item={12}>
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
                <Avatar>
                  <Image
                    src={`${publicRuntimeConfig.ROOT_API_URL}${
                      post.uploader && post.uploader.userPhoto.url
                    }`}
                    width={post.uploader.userPhoto.width}
                    height={post.uploader.userPhoto.height}
                  />
                </Avatar>
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
                <Box
                  aria-label="view"
                  display="flex"
                  alignItems="center"
                  mx={1}
                >
                  <Typography variant="h4">{post.views} views</Typography>
                </Box>
              </Box>
            </Box>

            {post.gallery.length > 0 ? (
              <Box my={2} mx={4}>
                <Gallery photos={post.gallery} />
              </Box>
            ) : null}

            <Box aria-label="body" my={2} mx={4}>
              <ReactMarkdown children={post.body} className={classes.try} />
            </Box>

            <Box
              aria-label="category-button"
              display="flex"
              alignItems="center"
              my={4}
              mx={4}
            >
              <Typography
                variant="h4"
                style={{ fontSize: 16, fontWeight: 400, marginRight: 8 }}
              >
                Category :
              </Typography>
              {post.categories.map((category, i) => (
                <Box key={i} mx={1}>
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
          </Box>
        </Card>
      </Grid>
      <Grid item={12} style={{ width: "100%" }}>
        <Contact />
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
)(ViewPostDetails);
