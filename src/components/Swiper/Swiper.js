import React, { useState } from "react";
import { motion } from "framer-motion";
import getConfig from "next/config";
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import SwiperCard from "./SwiperCard";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import { withStyles, Box } from "@material-ui/core";

const SwiperRoot = (props) => {
  const { editorChoices } = props;

  return (
    <Box mx={6} maxWidth={1700} minHeight={361} width="100%">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {editorChoices.map((editorChoice, i) => (
          <SwiperSlide key={i}>
            <SwiperCard editorChoice={editorChoice} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperRoot);
