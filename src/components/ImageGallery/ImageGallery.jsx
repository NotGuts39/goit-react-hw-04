import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard imageUrl={image.urls.small} altText={image.slug} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;