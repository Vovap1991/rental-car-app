import axios from 'axios';

axios.defaults.baseURL = 'https://650c900147af3fd22f67cb8d.mockapi.io/';

export const fetchAdverts = async () => {
  try {
    const response = await axios.get(`/adverts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
