'use client';
import axios from 'axios';
const axiosInstance = axios.create({  baseURL: 'https://dummyjson.com',
});
axiosInstance.interceptors.request.use(  (config) => {
    const token = localStorage.getItem('token');    if (token) {
      config.headers.Authorization = `Bearer ${token}`;    }
    return config;  },
  (error) => Promise.reject(error));
axiosInstance.interceptors.response.use(
  (response) => response,  async (error) => {
    const originalRequest = error.config;    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {        try {
          const { data } = await axiosInstance.post('/auth/refresh', { refreshToken });          
          localStorage.setItem('token', data.token);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;          
          originalRequest.headers['Authorization'] = `Bearer ${data.token}`;
          return axiosInstance(originalRequest);        } catch (err) {
          console.error('Failed to refresh token', err);        }
      }    }
    return Promise.reject(error);  }
);
export default axiosInstance;