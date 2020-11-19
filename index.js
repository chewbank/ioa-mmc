'use strict';

const ioa = require('@chewbank/ioa');
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:9900';

ioa.app("./main");

module.exports = ioa;
