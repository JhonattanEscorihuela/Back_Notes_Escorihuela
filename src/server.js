const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const noteRoutes = require("./routes/note");
const userRouter = require('../src/routes/user');

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use(cors());

server.use('/notes', noteRoutes);

server.use('/users', userRouter);

module.exports = server;
