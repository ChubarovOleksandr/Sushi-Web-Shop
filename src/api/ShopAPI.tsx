import axios from 'axios';

export const ShopAPI = async () => {
   const response = await axios.get('https://65afabe62f26c3f2139b6df0.mockapi.io/sushi_set');
   console.log(response);
}