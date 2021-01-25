import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:8081/forex',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

server.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));

export const getRequest = (options) => {
  const { url, params = {} } = options || {};
  const serverOptions = {
    url,
    method: 'get',
    params,
  };
  return server(serverOptions);
};