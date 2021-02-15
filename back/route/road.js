const user= require('../controller/controller-user'); //recup fonction utile controller
const express=require('express');
const {route} = require('../app/app'); // recup app
const app=express();

const data=require('../data/bdd')
/* const cloudinary = require("../image/upload");  
const upload=require('../image/multer') */
const manager=require('../Manager/user-manager');

class routes{
     constructor(req,res){
         this.req=req;
         this.res=res;
        this.userRoute(req,res)
    } 
    userRoute(req,res){
        console.log(req)
        app.post('/test',manager.ControllerUser(req,res))
    }
}



module.exports=new routes() //PAS OUBLIER EXPORT