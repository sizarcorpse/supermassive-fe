import React from "react";
import PropTypes from "prop-types";

// #next :
import Router from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";

// #hooks :

// #components :
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// #material-ui :
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Button } from "@material-ui/core";
import theme from "@/styles/theme";

// #other :
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>supermassive</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
