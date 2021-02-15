const env = require('dotenv').config();
const data = require('../data/bdd');
const bodyParser = require('body-parser');
const usercontroller=require('../controller/controller-user')

    class userManager{
        ControllerUser(req,res){
            console.log("manager")
            const controller=new usercontroller();
            const creat= controller.CreateUser(req,res);
        }
    }
    
        module.exports=new userManager();