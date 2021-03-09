"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categorie = void 0;
var mongoose_1 = require("mongoose");
var CatSchema = new mongoose_1.Schema({
    email: { type: String },
    passWord: { type: String },
    firstName: { type: String },
    Disponibilités: { type: [String] }
});
exports.Categorie = mongoose_1.model('Categorie', CatSchema);
