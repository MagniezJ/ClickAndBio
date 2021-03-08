"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var app_1 = require("./app/app");
/* import { APILogger } from "./logger/api.logger"; */
require('dotenv').config();
var port = process.env.PORT || 9998;
app_1.default.set("port", port);
var server = http.createServer(app_1.default);
server.listen(port);
server.on("listening", function () {
    console.log("you're connected at " + port);
});
module.exports = app_1.default;
