// #next :
import getConfig from "next/config";
import Link from "next/link";
// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import {
  withStyles,
  Box,
  Card,
  Typography,
  FormControl,
  TextField,
  Grid,
  TextareaAutosize,
  Button,
} from "@material-ui/core";

// #other :

// #mainFunction :

const Contact = (props) => {
  const { classes } = props;
  const { publicRuntimeConfig } = getConfig();

  return (
    <Card style={{ margin: "24px 24px", padding: 24 }}>
      <Box my={3}>
        <Typography variant="h5" style={{ color: "rgb(68, 68, 68)" }}>
          Leave a comment
        </Typography>
      </Box>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextareaAutosize
                className={classes.ScuiTextAreaLarge}
                required
                label="Comment Body"
                variant="outlined"
                rowsMin={16}
                aria-label="maximum height"
                placeholder="Give me a nice cool review. (max 500 words)"
                name="commentBody"
                variant="outlined"
                fullWidth
                id="commentBody"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                required
                id="name"
                label="Name"
                variant="outlined"
                color="primary"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                color="primary"
                type="email"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="website"
                label="Website"
                variant="outlined"
                color="primary"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" className={classes.PostButton}>
              <Typography variant="h4">Post Comment</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Contact);
