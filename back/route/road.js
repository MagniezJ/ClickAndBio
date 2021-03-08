"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var logger_1 = require("../logger/logger");
var user_controller_1 = require("../controllers/user-controller");
var commande_controller_1 = require("../controllers/commande-controller");
var Road = /** @class */ (function () {
    function Road() {
        this.express = express();
        this.routes();
        this.logger = new logger_1.APILogger();
        this.taskController = new user_controller_1.UserController();
        this.CommandeController = new commande_controller_1.CommandeController();
    }
    Road.prototype.routes = function () {
        var _this = this;
        this.express.get('/', function (req, res) {
            _this.taskController.getUserByMail(req.body).then(function (data) { return res.json(data); });
        });
        this.express.post('/create', function (req, res) {
            console.log(req.body);
            _this.taskController.createUser(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.post('/Commande', function (req, res) {
            console.log(req.body);
            _this.CommandeController.createCommande(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.get('/getcom', function (req, res) {
            _this.CommandeController.getComById(req.body.id).then(function (data) { return res.json(data); });
        });
        this.express.delete('/delete', function (req, res) {
            _this.taskController.deleteTask(req.body).then(function (data) { return res.json(data); });
        });
        // handle undefined routes
        // this.express.use();
    };
    return Road;
}());
exports.default = new Road().express;
