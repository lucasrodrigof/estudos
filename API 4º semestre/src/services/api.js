import axio from 'axios';

const token = localStorage.getItem('token')

const api = axio.create({
  baseURL: process.env.BACKEND,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:  `Bearer ${token}`
  }
});


export default api;