"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var road_1 = require("../route/road");
var cors = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        var corsOptions = {
            origin: "http://localhost:3000" //URL front 
        };
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.express.use(function (err, req, res, next) {
            console.log('This is the invalid field ->', err.field);
            next(err);
        });
        this.express.use(cors());
        this.express.use(cors(corsOptions));
    };
    App.prototype.routes = function () {
        this.express.use('/', road_1.default);
    };
    return App;
}());
exports.default = new App().express;
