const {CreateUser}= require('../controller/controller-user'); //recup fonction utile controller
const express=require('express');
const {route} = require('../app/app'); // recup app
const router=express.Router(); // simplication des route
/* const cloudinary = require("../image/upload");  
const upload=require('../image/multer') */


router.route('/') //route
    .post(CreateUser)

module.exports=router; //PAS OUBLIER EXPORT