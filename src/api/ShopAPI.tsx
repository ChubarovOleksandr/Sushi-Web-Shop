import axios from 'axios';

export const getItemsAPI = async () => {
   const response = await axios.get('https://65afabe62f26c3f2139b6df0.mockapi.io/items');
   return response.data;
}