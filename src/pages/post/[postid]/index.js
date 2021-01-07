import { useState } from "react";
import _ from "lodash";

// #next :
import { useRouter } from "next/router";
import getConfig from "next/config";
import useSWR, { trigger } from "swr";

// #hooks :
import { getSinglePost } from "@/actions/FetchPosts";
// #components :
import { ViewPostDetails } from "@/components/ViewPost";
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
  const postId = context.query.postid;
  const res = await getSinglePost({ context: context, postId: postId });

  return {
    props: { post: res },
  };
}

const ViewPost = (props) => {
  const { post } = props;
  const { publicRuntimeConfig } = getConfig();
  const router = useRouter();

  console.log(router);

  return (
    <Grid container components="main" style={{ backgroundColor: "#f9f7f7" }}>
      <Grid item xs={6}>
        <Box width="100%" height="100%">
          <ViewPostDetails post={post} />
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box width="100%" border={1}>
          5
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box width="100%" border={1}>
          6
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
  )(ViewPost)
);
