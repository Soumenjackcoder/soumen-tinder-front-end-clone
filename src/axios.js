import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://soumen-tinder-backend.herokuapp.com',
});

export default instance;
