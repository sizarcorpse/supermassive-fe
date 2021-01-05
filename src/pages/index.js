// get all posts
// get editorsChoice posts
import _ from "lodash";
// #hooks :
import { getAllPosts } from "@/actions/FetchPosts";

// #components :
import { PostsCard } from "@/components/Post";
import { withStyles, Grid, Box } from "@material-ui/core";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

//1
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
//2
// import Masonry from "react-masonry-component";

import { ThemeDistributor } from "@/styles/ThemeDistributor";

export async function getServerSideProps(context) {
  const posts = await getAllPosts(context);

  return {
    props: {
      posts: posts,
    },
  };
}

const Home = (props) => {
  const { posts, classes, width } = props;

  // const masonryOptions = {
  //   transitionDuration: 0,
  // };
  // const imagesLoadedOptions = { background: ".my-bg-image-el" };
  // const style = {
  //   border: "1px solid pink",
  // };

  function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      tempArray.push(myChunk);
    }
    return tempArray;
  }

  var result = chunkArray(posts, posts.length / 4);

  console.log("withWidth", width);

  return (
    <Grid container components="main">
      <Grid item xs={12}>
        <Box
          aria-label="all-post"
          justifyContent="center"
          className={classes.flexBoxRoot}
        >
          <Box className={classes.flexCol}>
            {result[0].map((p, i) => (
              <PostsCard post={p} key={i} />
            ))}
          </Box>
          <Box className={classes.flexCol}>
            {result[1].map((p, i) => (
              <PostsCard post={p} key={i} />
            ))}
          </Box>
          <Box className={classes.flexCol}>
            {result[2].map((p, i) => (
              <PostsCard post={p} key={i} />
            ))}
          </Box>
          <Box className={classes.flexCol}>
            {result[3].map((p, i) => (
              <PostsCard post={p} key={i} />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(
  withStyles(
    (theme) => ({
      // ...MuiNav(theme),
      ...ThemeDistributor(theme),
    }),
    { withTheme: true }
  )(Home)
);

{
  /* <ResponsiveMasonry
            columnsCountBreakPoints={{ 500: 1, 810: 2, 1215: 3, 1620: 4 }}
          >
            <Masonry>
              {posts.map((post, i) => (
                <PostsCard post={post} key={i} />
              ))}
            </Masonry>
          </ResponsiveMasonry> */
}
{
  /* <Masonry
          className={"my-gallery-class"}
          style={style}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          imagesLoadedOptions={imagesLoadedOptions}
        >
          {posts.map((post, i) => (
            <PostsCard post={post} key={i} />
          ))}
        </Masonry> */
}
