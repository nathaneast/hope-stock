import axios from 'axios';

const apis = {
  stockList: () => axios.get('/stocks/mock-user').then(({ data }) => data),
};
export default apis;
