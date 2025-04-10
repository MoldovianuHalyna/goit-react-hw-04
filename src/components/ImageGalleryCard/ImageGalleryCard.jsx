import Description from "../Description/Description";
import s from "./ImageGalleryCard.module.css";
const ImageGalleryCard = ({ picture }) => {
  return (
    <li>
      <div className={s.imageWrapper}>
        <img src={picture.urls.small} alt={picture.alt_description} />
        <Description picture={picture} />
      </div>
    </li>
  );
};

export default ImageGalleryCard;
