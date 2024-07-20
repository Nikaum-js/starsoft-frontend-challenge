import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/api'
  : 'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1';

export const api = axios.create({
  baseURL,
});
