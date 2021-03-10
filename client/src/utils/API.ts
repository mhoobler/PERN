import axios from 'axios';

const API = {
  test: async () => await axios.get('/_'),
  getAllTodos: async () => await axios.get('/_todos')
};

export default API;
