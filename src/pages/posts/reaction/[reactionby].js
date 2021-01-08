import { useState } from "react";
import _ from "lodash";

// #next :
import { useRouter } from "next/router";
import getConfig from "next/config";
import useSWR, { trigger } from "swr";

// #hooks :
import { getPostsByReaction } from "@/actions/FetchPosts";

// #components :
import { PostsCard } from "@/components/Post";
import SwiperRoot from "@/components/Swiper/Swiper";

// #material-ui :
import {
  withStyles,
  Grid,
  Box,
  Button,
  Typography,
  Card,
} from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { ThemeDistributor } from "@/styles/ThemeDistributor";

export async function getServerSideProps(context) {
  const reactionBy = context.query.reactionby;
  const res = await getPostsByReaction({
    context: context,
    reactionBy: reactionBy,
  });

  return {
    props: {
      allPosts: res,
    },
  };
}

const PostsByReaction = (props) => {
  const { allPosts: post, classes } = props;
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();

  // #handlers : flex box grid
  function chunkArray(myArray, chunk_size) {
    let index = 0;
    const arrayLength = myArray.length;
    const tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  const result = chunkArray(post, post.length / 4);

  return (
    <Grid container components="main" style={{ backgroundColor: "#f9f7f7" }}>
      <Grid item xs={12}>
        <Box width={"100%"} display="flex" justifyContent="center">
          <Box mx={6} maxWidth={1700} width="100%">
            <Card style={{ padding: "32px 0px" }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                flexShrink={1}
              >
                <Typography
                  style={{
                    fontFamily: "Ubuntu",
                    fontSize: "3.5em",
                    letterSpacing: -1.4,
                    wordSpacing: 0,
                    fontWeight: 300,
                    textTransform: "capitalize",
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  Reaction By : {router.query.reactionby}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Ubuntu",
                    fontSize: "1.2em",
                    letterSpacing: 1,
                    wordSpacing: 1,
                    fontWeight: 300,
                    textTransform: "capitalize",
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textAlign: "center",
                  }}
                >
                  Posts in this category featured and editor choice.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          aria-label="all-post"
          justifyContent="center"
          className={classes.flexBoxRoot}
        >
          {result.map((subset, i) => (
            <Box className={classes.flexCol} key={i}>
              {subset.map((p, i) => (
                <PostsCard postx={p} key={i} />
              ))}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles(
    (theme) => ({
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(PostsByReaction)
);
