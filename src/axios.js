import axios from 'axios';

const instance = axios.create({
  baseURL: '<ENTER YOUR baseURL>',
});

export default instance;
