import { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMoreImages, setHasMoreImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
     if (searchQuery === '') {
      return;
    }
    
    async function getData() {
      try {
        setIsLoading(true);
        const data = await fetchImages(searchQuery, page);
        setImages(prevImages => [...prevImages, ...data]);
        setHasMoreImages(data.length > 0);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  const handleSearch = newQuery => {
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setIsLoading(true);
    setError(null);
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error ?
      <ErrorMessage message={error} /> :
      <ImageGallery images={images} openModal={openModal} />}
      {isLoading && <Loader />}
      {hasMoreImages && <LoadMoreBtn onLoadMore={handleLoadMore} hasMoreImages={hasMoreImages} />}
      {selectedImage && 
      <ImageModal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        imageUrl={selectedImage.urls.regular}
        imageAlt={selectedImage.alt}
      />
}
    </div>
  );
}

export default App