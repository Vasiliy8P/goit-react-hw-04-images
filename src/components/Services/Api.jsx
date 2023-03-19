import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '33012964-d2f02498e1834ade0e55f92fd';

export const GetImages = async (values, page) => {
    const response = await axios.get(`?key=${API_KEY}&q=${values}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
    return response.data;
}