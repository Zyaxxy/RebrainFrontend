// import axios from 'axios';

// export const api = axios.create({
//   baseURL: 'http://localhost:3000/api/v1',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers = config.headers || {};
//     // Put token in Authorization header
//     config.headers['authorization'] = token;
//   }
//   return config;
// });

// export const auth = {
//   signIn: async (username: string, password: string) => {
//     const response = await api.post('/signin', { username, password });
//     return response.data;
//   },
//   signUp: async (username: string, password: string) => {
//     const response = await api.post('/signup', { username, password });
//     return response.data;
//   },
// };

// export const content = {
//   getAll: async () => {
//     const response = await api.get('/content');
//     return response.data;
//   },
//   create: async (data: { title: string; link: string; type: string }) => {
//     const response = await api.post('/content', data);
//     return response.data;
//   },
//   delete: async (contentId: string) => {
//     const response = await api.delete('/content', { data: { contentId } });
//     return response.data;
//   },
// };

// export const sharing = {
//   toggle: async (share: boolean) => {
//     const response = await api.post('/brain/share', { share });
//     return response.data;
//   },
// };