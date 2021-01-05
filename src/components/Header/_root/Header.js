// #components :
import { Head } from "../Head";
import { Nav } from "../Nav";

import { ThemeDistributor } from "@/styles/ThemeDistributor";
import { withStyles } from "@material-ui/core";

const Header = (props) => {
  const { classes, closeMe, handleNavSmallModalClose } = props;

  return (
    <>
      <Head />
      <Nav />
    </>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(Header);
