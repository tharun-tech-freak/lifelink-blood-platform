// client/src/api/donorApi.js
import api from './axios.js';

export const donorApi = {
  getAll() {
    return api.get('/donors');
  },
  create(data) {
    return api.post('/donors', data);
  },
};