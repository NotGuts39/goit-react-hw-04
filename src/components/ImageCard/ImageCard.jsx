import css from './ImageCard.module.css';

const ImageCard = ({ imageUrl, altText }) => {
  
  if (!altText) {
    altText = "Alternative text";
  }

  return (
    <div className={css.imageCard}>
      <img src={imageUrl} alt={altText} className={css.image} />
    </div>
  );
};

export default ImageCard;