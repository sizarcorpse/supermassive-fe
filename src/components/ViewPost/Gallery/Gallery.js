import React, { useState, useCallback } from "react";
// #next :

// #contexts :

// #hooks :

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "@/styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";
// #other :
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

// #mainFunction :

const GalleryViewer = (props) => {
  const { photos, classes } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const photoSet = [];
  if (photos) {
    photos.map(async (photo) => {
      let image = {
        src: `http://localhost:1337${photo.formats.large.url}`,
        width: photo.formats.large.width,
        height: photo.formats.large.height,
        source: {
          download: `http://localhost:1337${photo.url}`,
          fullscreen: `http://localhost:1337${photo.url}`,
          regular: `http://localhost:1337${photo.formats.large.url}`,
          thumbnail: `http://localhost:1337${photo.formats.large.url}`,
        },
      };
      photoSet.push(image);
    });
  }

  return (
    <Box>
      <Gallery
        photos={photoSet}
        onClick={openLightbox}
        style={{ objectFit: "cover" }}
      />
      <ModalGateway style={{ objectFit: "cover" }}>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} className={classes.model}>
            <Carousel
              style={{ backgroundColor: "#f9f7f7" }}
              allowFullscreen="true"
              isFullscreen="true"
              autoSize={true}
              preventScroll="true"
              currentIndex={currentImage}
              views={photoSet.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
};
export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(GalleryViewer);
