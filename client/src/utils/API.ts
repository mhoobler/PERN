import axios from 'axios';

const API = {
  test: async () => await axios.get('/_')
};

export default API;
