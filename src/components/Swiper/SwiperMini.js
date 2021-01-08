// #next :
import getConfig from "next/config";
import Image from "next/image";
// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination]);

// #mainFunction :

const SwiperMini = (props) => {
  const { photos } = props;
  const { publicRuntimeConfig } = getConfig();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{ maxWidth: 405, maxHeight: 302 }}
    >
      {photos.map((photo, i) => (
        <SwiperSlide key={i} style={{ maxWidth: 405, maxHeight: 302 }}>
          <Box width="100%" height="100%">
            <Image
              src={`${publicRuntimeConfig.ROOT_API_URL}${photo.url}`}
              width={photo.width}
              height={photo.height}
              layout="responsive"
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(SwiperMini);
