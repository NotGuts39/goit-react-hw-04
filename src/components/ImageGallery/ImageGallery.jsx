import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'; 

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.imageGalleryContainer}>
      {images.map((image, index) => (
        <li key={index} className={css.imageCardItem} onClick={() => openModal(image)}>
          <ImageCard imageUrl={image.urls.small} altText={image.slug} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;