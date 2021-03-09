"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magasin = void 0;
var mongoose_1 = require("mongoose");
var MagSchema = new mongoose_1.Schema({
    email: { type: String },
    passWord: { type: String },
    firstName: { type: String },
    Disponibilités: { type: [String] }
});
exports.Magasin = mongoose_1.model('Magasins', MagSchema);
