import {
  makeStyles,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Hidden,
  SvgIcon,
  Tooltip,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  Divider,
} from "@material-ui/core";

/**
 * fn:#0081ef
 * vi:#ff483a
 * ga:#ff0f34
 * ft:#12a898
 *
 *
 *
 */

const useStyles = makeStyles({
  root: {
    borderRadius: 50,
    backgroundColor: (props) => props.bgColor,
    color: "#ffffff",
  },
});

const SMButton = (props) => {
  const { children, variant } = props;

  const bgColor =
    variant === "Funny News"
      ? "#0081ef"
      : variant === "Featured"
      ? "#12a898"
      : variant === "Gallery"
      ? "ff0f34"
      : variant === "Viral"
      ? "#ff483a"
      : "#ff";

  const classes = useStyles({ bgColor });

  return (
    <Button variant="contained" className={classes.root} size="small">
      {children}
    </Button>
  );
};

export default SMButton;