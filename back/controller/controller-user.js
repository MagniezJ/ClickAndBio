const env = require('dotenv').config();
const data = require('../data/bdd');
const bodyParser = require('body-parser');
const User = require('../model/user-model');
/* const { create } = require('../model/user-model'); */
 /* const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt');
const nodemailer = require("nodemailer");  */

class user{
 
   constructor(){
    this.CreateUser()
  } 
  CreateUser(req,res) { // (reçoit, renvoie) fonction de creation d'user (inscription)
                console.log("test");
    /* User.findOne({ // cherche si ya un user avec le meme mail
                email: req.body.email
            }).then((us)=>{ //us= variable de la recherche
                if(us != null){ // si ya un user 
                    console.log(us)
                res.json("L'utilisateur existe déjà");
                } else { //si pas user
                */
              /*  console.log(req.body)
               const user = new User({ // creation user avec les données reçues
                    email: req.body.email,
                    Password: req.body.Password,
                    Nom: req.body.Nom,
                    Prenom: req.body.Prenom
                });
                console.log('user saved'); //affiche adans le back
                user.save(); //envoie a la bdd
                res.json("Ok"); //affiche dans front */
            }/*
                })   
            }*/
}
    
        module.exports=user;