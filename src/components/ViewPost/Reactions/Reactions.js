// #next :
import useSWR, { trigger, mutate } from "swr";
import getConfig from "next/config";
// #contexts :

// #hooks :
import { giveReaction } from "@/actions/UpdatePosts";

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import {
  makeStyles,
  withStyles,
  Box,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { Angry } from "@/assets/icons";
import { Haha } from "@/assets/icons";
import { Love } from "@/assets/icons";
import { Sad } from "@/assets/icons";
import { Wow } from "@/assets/icons";
import { Like } from "@/assets/icons";

// #other :
import { motion } from "framer-motion";
import _ from "lodash";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 25,
    borderRadius: 35,
    width: 328,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 35,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  recText: {
    position: "absolute",
    top: "5px",
    margin: "0px 24px",
    fontWeight: 500,
    textTransform: "capitalize",
  },
  click: {
    cursor: "pointer",
  },
  barColor: {
    "& .MuiLinearProgress-bar": {
      backgroundColor: (props) => (props.ck > 0 ? "#1a90ff" : "#eeeeee"),
    },
  },
});

// #mainFunction :
const Reactions = (props) => {
  const { postx } = props;
  const { publicRuntimeConfig } = getConfig();
  const { data: post } = useSWR(
    `${publicRuntimeConfig.ROOT_API_URL}/posts/${postx._id}`,
    {
      initialData: postx,
      revalidateOnFocus: false,
    }
  );

  const classes = useStyles({ ck: post.reactions });

  const handleReaction = async (reaction) => {
    mutate(
      `${publicRuntimeConfig.ROOT_API_URL}/posts/${post._id}`,
      {
        ...post,
        [reaction]: post[reaction] + 1,
        reactions: post.reactions + 1,
      },
      false
    );
    await giveReaction({ postId: post.id, reaction: reaction });
    trigger(`${publicRuntimeConfig.ROOT_API_URL}/posts/${post._id}`);
  };

  return (
    <Box display="flex" justifyContent="center" flexDirection="column" mx={1}>
      <Box my={2} mx={2} display="flex" alignItems="center">
        <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
          Post Reactions
        </Typography>
        <Typography variant="h2">+ {post.reactions}</Typography>
      </Box>
      <Box
        my={2}
        mx={2}
        aria-label="reactions"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box aria-label="like" display="flex" alignItems="center" mb={1}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Like
              className={classes.click}
              onClick={() => handleReaction("like")}
            />
          </motion.div>

          <Box mx={2} style={{ position: "relative" }}>
            <BorderLinearProgress
              variant="determinate"
              value={(post.like * 100) / post.reactions}
              className={classes.barColor}
            />
            <Typography variant="h4" className={classes.recText}>
              Like ({post.like})
            </Typography>
          </Box>
        </Box>
        <Box aria-label="love" display="flex" alignItems="center" mb={1}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Love
              className={classes.click}
              onClick={() => handleReaction("love")}
            />
          </motion.div>
          <Box mx={2} style={{ position: "relative" }}>
            <BorderLinearProgress
              variant="determinate"
              value={(post.love * 100) / post.reactions}
              className={classes.barColor}
            />
            <Typography variant="h4" className={classes.recText}>
              Love ({post.love})
            </Typography>
          </Box>
        </Box>
        <Box aria-label="haha" display="flex" alignItems="center" mb={1}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Haha
              className={classes.click}
              onClick={() => handleReaction("haha")}
            />
          </motion.div>
          <Box mx={2} style={{ position: "relative" }}>
            <BorderLinearProgress
              variant="determinate"
              value={(post.haha * 100) / post.reactions}
              className={classes.barColor}
            />
            <Typography variant="h4" className={classes.recText}>
              Haha ({post.haha})
            </Typography>
          </Box>
        </Box>
        <Box aria-label="wow" display="flex" alignItems="center" mb={1}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Wow
              className={classes.click}
              onClick={() => handleReaction("wow")}
            />
          </motion.div>
          <Box mx={2} style={{ position: "relative" }}>
            <BorderLinearProgress
              variant="determinate"
              value={(post.wow * 100) / post.reactions}
              className={classes.barColor}
            />
            <Typography variant="h4" className={classes.recText}>
              Wow ({post.wow})
            </Typography>
          </Box>
        </Box>
        <Box aria-label="sad" display="flex" alignItems="center" mb={1}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Sad
              className={classes.click}
              onClick={() => handleReaction("sad")}
            />
          </motion.div>
          <Box mx={2} style={{ position: "relative" }}>
            <BorderLinearProgress
              variant="determinate"
              value={(post.sad * 100) / post.reactions}
              className={classes.barColor}
            />
            <Typography variant="h4" className={classes.recText}>
              Sad ({post.sad})
            </Typography>
          </Box>
        </Box>
        <Box aria-label="angry" display="flex" alignItems="center" mb={1}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Angry
              className={classes.click}
              onClick={() => handleReaction("angry")}
            />
          </motion.div>
          <Box mx={2} style={{ position: "relative" }}>
            <BorderLinearProgress
              variant="determinate"
              value={(post.angry * 100) / post.reactions}
              className={classes.barColor}
            />
            <Typography variant="h4" className={classes.recText}>
              Angry ({post.angry})
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Reactions);

//(post.like * post.reactions) / post.reactions
