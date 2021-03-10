"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bcrypt = require("bcrypt");
var logger_1 = require("../logger/logger");
var user_controller_1 = require("../controllers/user-controller");
var commande_controller_1 = require("../controllers/commande-controller");
var Produit_controller_1 = require("../controllers/Produit-controller");
var Magasin_controller_1 = require("../controllers/Magasin-controller");
var Categorie_controller_1 = require("../controllers/Categorie-controller");
var Road = /** @class */ (function () {
    function Road() {
        this.express = express();
        this.routes();
        this.logger = new logger_1.APILogger();
        this.taskController = new user_controller_1.UserController();
        this.CommandeController = new commande_controller_1.CommandeController();
        this.ProduitController = new Produit_controller_1.ProduitController();
        this.MagasinController = new Magasin_controller_1.MagasinController();
        this.CatController = new Categorie_controller_1.CatController();
    }
    Road.prototype.routes = function () {
        var _this = this;
        //user
        this.express.get('/find/user', function (req, res) {
            _this.taskController.getUserByMail(req.body).then(function (data) { return res.json(data); });
        });
        this.express.post('/new/user', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var Salt, Hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, bcrypt.genSalt(10)];
                    case 1:
                        Salt = _a.sent();
                        return [4 /*yield*/, bcrypt.hash(req.body.passWord, Salt)];
                    case 2:
                        Hash = _a.sent();
                        req.body.passWord = Hash;
                        this.taskController.createUser(req.body)
                            .then(function (data) { return res.json(data); });
                        return [2 /*return*/];
                }
            });
        }); });
        this.express.delete('/delete/user', function (req, res) {
            _this.taskController.deleteTask(req.body).then(function (data) { return res.json(data); });
        });
        this.express.post('/update/user', function (req, res) {
            _this.taskController.updateUser(req.body).then(function (data) { return res.json(data); });
        });
        //commande
        this.express.post('/new/Commande', function (req, res) {
            console.log(req.body);
            _this.CommandeController.createCommande(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.delete('/delete/Commande', function (req, res) {
            _this.CommandeController.delete(req.body).then(function (data) { return res.json(data); });
        });
        this.express.get('/find/Commande', function (req, res) {
            _this.CommandeController.getComById(req.body.id).then(function (data) { return res.json(data); });
        });
        //produit
        this.express.post('/new/Produit', function (req, res) {
            console.log(req.body);
            _this.ProduitController.createProduct(req.body)
                .then(function (data) { return res.json(data); });
        });
        /*  this.express.get('/find/Produit', (req, res) => {
             console.log(req.body);
             this.ProduitController.getProdById(req.body)
                 .then(data => res.json(data));
         }); */
        this.express.get('/All/Produit', function (req, res) {
            console.log(req.body);
            _this.ProduitController.getProd(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.delete('/delete/Produit', function (req, res) {
            console.log(req.body);
            _this.ProduitController.deleteProduit(req.body)
                .then(function (data) { return res.json(data); });
        });
        //magasin
        this.express.post('/new/Magasin', function (req, res) {
            console.log(req.body);
            _this.ProduitController.createProduct(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.get('/find/Magasin', function (req, res) {
            console.log(req.body);
            _this.MagasinController.getMagById(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.delete('/delete/Magasin', function (req, res) {
            console.log(req.body);
            _this.MagasinController.deleteMagasin(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.post('/update/Magasin', function (req, res) {
            _this.MagasinController.updateMag(req.body).then(function (data) { return res.json(data); });
        });
        //catégorie
        this.express.post('/new/Categorie', function (req, res) {
            console.log(req.body);
            _this.CatController.createCategorie(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.get('/find/Categorie', function (req, res) {
            console.log(req.body);
            _this.CatController.getCatById(req.body)
                .then(function (data) { return res.json(data); });
        });
        this.express.delete('/delete/Categorie', function (req, res) {
            console.log(req.body);
            _this.CatController.deleteCat(req.body)
                .then(function (data) { return res.json(data); });
        });
    };
    return Road;
}());
exports.default = new Road().express;
