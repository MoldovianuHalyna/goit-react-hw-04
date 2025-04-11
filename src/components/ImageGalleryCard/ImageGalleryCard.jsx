import Description from "../Description/Description";
import s from "./ImageGalleryCard.module.css";
const ImageGalleryCard = ({ picture, openModal }) => {
  return (
    <li>
      <div className={s.imageWrapper}>
        <img
          onClick={() => {
            openModal({
              src: picture.urls.regular,
              alt: picture.alt_description,
            });
          }}
          src={picture.urls.small}
          alt={picture.alt_description}
        />
        <Description picture={picture} />
      </div>
    </li>
  );
};

export default ImageGalleryCard;
