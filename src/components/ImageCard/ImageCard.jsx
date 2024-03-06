import css from './ImageCard.module.css';

const ImageCard = ({ imageUrl, altText }) => {
  return (
    <div className={css.imageCard}>
      <img src={imageUrl} alt={altText} className={css.image} />
    </div>
  );
};

export default ImageCard;