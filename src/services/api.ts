import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

// const BASE_URL = process.env.REACT_APP_API_BASE_URL!.split(',') || '';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = async ({
    url = '',
    data = {},
    headers,
    method = 'GET',
  }: // eslint-disable-next-line consistent-return
  AxiosRequestConfig): Promise<AxiosPromise | any> => {
    try {
      const res = await axios({
        method,
        url: `${BASE_URL}/${url}`,
        headers: { 'Content-Type': 'application/json', ...headers },
        data,
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  export default api;
