"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var bcrypt = require("bcrypt");
var UserSchema = new mongoose_1.Schema({
    email: { type: String },
    passWord: { type: String },
    firstName: { type: String },
    lastName: { type: String }
});
exports.User = mongoose_1.model('users', UserSchema);
