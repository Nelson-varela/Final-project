import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

 API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });


export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);

export const fetchNovelties = () => API.get('/novelties');
export const createNovelty = (newNovelty) => API.post('/novelties', newNovelty);

export const getSessions = () => API.get('/sessions');
export const logginSession = (newLoggin) => API.post('/sessions', newLoggin);
export const logoutSession = (newLogout) => API.post('/sessions', newLogout);