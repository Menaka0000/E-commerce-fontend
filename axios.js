const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'http://localhost:8800',
    timeout: 5000,
  });

  module.exports = instance;