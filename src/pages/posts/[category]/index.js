import { useState } from "react";
import _ from "lodash";

// #next :
import { useRouter } from "next/router";
import getConfig from "next/config";
import useSWR, { trigger } from "swr";

// #hooks :
import { getPostByCategory } from "@/actions/FetchPosts";

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
  const res = await getPostByCategory({ context: context });

  return {
    props: { allPosts: res },
  };
}

const Category = (props) => {
  const { allPosts: post, classes, width, editorChoices } = props;
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
            <Card>
              <Typography></Typography>
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
          {_.shuffle(result).map((subset, i) => (
            <Box className={classes.flexCol} key={i}>
              {subset.map((p, i) => (
                <PostsCard post={p} key={i} />
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
  )(Category)
);
