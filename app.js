// importaciones de node first
require('dotenv').config();

// clases propias
const Server = require('./models/server.js');

// main
const server = new Server();

server.listen();
