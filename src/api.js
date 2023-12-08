import axios from 'axios';

const url = 'https://650c900147af3fd22f67cb8d.mockapi.io/adverts';

export const fetchAdverts = async (page, limit) => {
  try {
    const response = await axios.get(`${url}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// axios.defaults.baseURL = 'https://650c900147af3fd22f67cb8d.mockapi.io/';

// export const fetchAdverts = async page => {
//   try {
//     const response = await axios.get(`/adverts?limit=12&${page}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
