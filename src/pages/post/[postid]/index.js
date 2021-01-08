// #next :

// #hooks :
import { getSinglePost } from "@/actions/FetchPosts";

// #components :
import { ViewPostDetails, Reactions } from "@/components/ViewPost";

// #material-ui :
import { withStyles, Grid, Box, Card } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { ThemeDistributor } from "@/styles/ThemeDistributor";

// #serverSideProps :
export async function getServerSideProps(context) {
  const postId = context.query.postid;
  const res = await getSinglePost({ context: context, postId: postId });

  return {
    props: { post: res },
  };
}

// #mainFunction :
const ViewPost = (props) => {
  const { post, width } = props;

  console.log("width is :", width);
  return (
    <Grid
      container
      components="main"
      style={{ backgroundColor: "#f9f7f7", display: "flex" }}
    >
      <Grid item xs={false} sm={false} md={false} lg={false} xl={1} />
      <Grid item xl={6} lg={8} md={7} sm={12} xs={12}>
        <Box width="100%" height="100%">
          <ViewPostDetails post={post} />
        </Box>
      </Grid>
      <Grid item xl={4} lg={4} md={5} sm={12} xs={12}>
        <Box width="100%" display="flex" justifyContent="center" mb={5}>
          <Card>
            <Reactions postx={post} />
          </Card>
        </Box>
      </Grid>
      <Grid item xs={false} sm={false} md={false} lg={false} xl={1} />
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
