import axios from 'axios';

export const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

axios.defaults.baseURL = 'https://650c900147af3fd22f67cb8d.mockapi.io/';

export const fetchAdverts = async () => {
  try {
    const response = await axios.get(`/adverts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
