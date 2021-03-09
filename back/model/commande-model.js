"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commande = void 0;
var mongoose_1 = require("mongoose");
var bcrypt = require("bcrypt");
var CommandeSchema = new mongoose_1.Schema({
    Magasin: { type: String },
    Heurerdv: { type: String },
    Daterdv: { type: String },
    Etat: { type: String },
    Produits: { type: [String] }
});
exports.Commande = mongoose_1.model('commande', CommandeSchema);
