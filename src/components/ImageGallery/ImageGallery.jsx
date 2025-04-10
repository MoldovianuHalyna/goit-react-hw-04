import ImageGalleryCard from "../ImageGalleryCard/ImageGalleryCard";
import Grid from "../Grid/Grid";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ pictures }) => {
  return (
    <ul className={s.list}>
      <Grid>
        {pictures.map((picture) => {
          return <ImageGalleryCard key={picture.id} picture={picture} />;
        })}
      </Grid>
    </ul>
  );
};

export default ImageGallery;
