import  { useEffect, useState } from 'react';
import { fetchImages } from '../api';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from '../Loader/Loader';


 const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
   const [page, setPage] = useState(1);
   const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await fetchImages(searchQuery, page);
        setImages(prevImages => [...prevImages, ...data]);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [searchQuery, page]);

  
  const handleSearch = newQuery => {
    if (newQuery === searchQuery) {
      return;
    }
    setSearchQuery(newQuery);
    setPage(1);
    setImages([]);
    setIsLoading(true);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      
      <ImageGallery images={images} />
      {isLoading && <Loader />}
    </div>
  );
}

export default App;




