"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
var mongoose_1 = require("mongoose");
var ProdSchema = new mongoose_1.Schema({
    SKU: { type: String },
    Prix: { type: String },
    Nom: { type: String },
    Quantité: { type: String },
    Description: { type: String },
    images: { type: String }
});
exports.Produit = mongoose_1.model('Produits', ProdSchema);
