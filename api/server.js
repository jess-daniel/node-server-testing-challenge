const express = require("express");

const server = express();

// imports

// middlewares
server.use(express.json());

// routes

module.exports = server;
