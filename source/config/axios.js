const axios = require("axios");

const PATH = `https://api.autentique.com.br/v2`;
const ACCESS_TOKEN = `fd68702f1667f1f8487830855d373173087b89c395997e4b1608b383e3d86b0d`;

const instance = axios.create({
  baseURL: PATH,
  headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
});

export { instance };
