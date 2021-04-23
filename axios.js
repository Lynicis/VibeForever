require('dotenv').config();
const axios = require('axios');

const instance = axios.create({
    baseURL: `https://g.tenor.com/v1/`,
    params: {
        key: process.env.TENOR_API_KEY
    }
})

module.exports = instance;