import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
  client_id: 'KwJrzYWcJITCy55uO-4u0VojSSftCTdk-j729Awlu4k',
};

 export const fetchImages = async (searchQuery, page) => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        query: searchQuery,
        per_page: 12,
        page,
      },
    });

      return response.data.results;
      
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}

