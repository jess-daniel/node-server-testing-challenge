const express = require("express");

const server = express();

// imports
const articleRouter = require("../blog/articleRouter");

// middlewares
server.use(express.json());

// routes
server.use("/api/articles", articleRouter);

module.exports = server;
