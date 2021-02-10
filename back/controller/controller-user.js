const env = require('dotenv').config();

const bodyParser = require('body-parser');
const db = require('../data/bdd');
/* const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const nodemailer = require("nodemailer"); */
module.exports = {
    CreateUser(req, res) { // (reçoit, renvoie) fonction de creation d'user (inscription)
    db.collection('data').insertOne({ text: req.body.text }, function (
        err,
        info
      ) {
        res.json(info.ops[0])
      })
    }
}