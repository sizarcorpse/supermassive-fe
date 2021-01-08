// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :
import SwiperCard from "./SwiperCard";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

// #mainFunction :

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
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperRoot);
