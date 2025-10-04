import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => api.post('/login', credentials);
export const register = (userData) => api.post('/register', userData);

export const getUser = () => api.get('/user')

export const getProducts = (params) => api.get('/products', { params });
export const getProductById = (id) => api.get(`/products/${id}`);
export const getCart = () => api.get('/cart');
export const addToCart = (productId) => api.post('/cart', { product_id: productId });
export const getOrders = (params) => api.get('/orders', { params });
export const updateOrderStatus = (orderId, status) => api.put(`/orders/${orderId}`, { status });

export default api;