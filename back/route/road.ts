import * as bodyParser from "body-parser";
import * as express from "express";
import * as bcrypt from "bcrypt";
import { APILogger } from "../logger/logger";
import { UserController } from "../controllers/user-controller";
<<<<<<< HEAD
import { CommandeController } from "../controllers/commande-controller"
=======
import { CommandeController } from "../controllers/commande-controller";
import { ProduitController } from "../controllers/Produit-controller";
import { MagasinController } from "../controllers/Magasin-controller";
import { CatController } from "../controllers/Categorie-controller";
>>>>>>> main
import fs = require('fs');

class Road{
    public express: express.Application;
    public logger: APILogger;
    public taskController:  UserController ;
    public CommandeController :CommandeController;
<<<<<<< HEAD
=======
    public ProduitController :ProduitController;
    public MagasinController :MagasinController;
    public CatController :CatController;
>>>>>>> main

constructor() {
    this.express = express();
    this.routes();
    this.logger = new APILogger();
    this.taskController = new  UserController();
    this.CommandeController = new CommandeController();
<<<<<<< HEAD
}
    private routes(): void {
        this.express.get('/', (req, res) => {
            this.taskController.getUserByMail(req.body).then(data => res.json(data));
        });
        this.express.post('/create', async (req, res) => {
=======
    this.ProduitController = new ProduitController();
    this.MagasinController = new MagasinController();
    this.CatController = new CatController();
}
    private routes(): void {

        //user
        this.express.get('/find/user', (req, res) => {
            this.taskController.getUserByMail(req.body).then(data => res.json(data));
        });
        this.express.post('/new/user', async (req, res) => {
>>>>>>> main
            console.log(req.body);
            const Salt=await bcrypt.genSalt(10);
        const Hash=await bcrypt.hash(req.body.passWord,Salt);
        req.body.passWord=Hash;
            this.taskController.createUser(req.body)
                .then(data => res.json(data));
        });
<<<<<<< HEAD
        this.express.delete('/delete', (req, res) => {
=======
        this.express.delete('/delete/user', (req, res) => {
>>>>>>> main
            this.taskController.deleteTask(req.body).then(data => res.json(data));
        });
        this.express.post('/update/user', (req,res)=>{
            this.taskController.updateUser(req.body).then(data=>res.json(data));
        })
<<<<<<< HEAD
        this.express.post('/Commande', (req, res) => {
=======


//commande
        this.express.post('/new/Commande', (req, res) => {
>>>>>>> main
            console.log(req.body);
            this.CommandeController.createCommande(req.body)
                .then(data => res.json(data));
        });
<<<<<<< HEAD
        this.express.delete('/Commande/delete', (req, res) => {
            this.CommandeController.delete(req.body).then(data => res.json(data));
        });
        this.express.get('/getcom', (req, res) => {
            this.CommandeController.getComById(req.body.id).then(data => res.json(data));
        });
        
    
    // handle undefined routes
   // this.express.use();
=======
        this.express.delete('/delete/Commande', (req, res) => {
            this.CommandeController.delete(req.body).then(data => res.json(data));
        });
        this.express.get('/find/Commande', (req, res) => {
            this.CommandeController.getComById(req.body.id).then(data => res.json(data));
        });


//produit
        this.express.post('/new/Produit', (req, res) => {
            console.log(req.body);
            this.ProduitController.createProduct(req.body)
                .then(data => res.json(data));
        });
        this.express.get('/find/Produit', (req, res) => {
            console.log(req.body);
            this.ProduitController.getProdById(req.body)
                .then(data => res.json(data));
        });
        this.express.delete('/delete/Produit', (req, res) => {
            console.log(req.body);
            this.ProduitController.deleteProduit(req.body)
                .then(data => res.json(data));
        });


        //magasin
        this.express.post('/new/Magasin', (req, res) => {
            console.log(req.body);
            this.ProduitController.createProduct(req.body)
                .then(data => res.json(data));
        });
        this.express.get('/find/Magasin', (req, res) => {
            console.log(req.body);
            this.MagasinController.getMagById(req.body)
                .then(data => res.json(data));
        });
        this.express.delete('/delete/Magasin', (req, res) => {
            console.log(req.body);
            this.MagasinController.deleteMagasin(req.body)
                .then(data => res.json(data));
        });
        this.express.post('/update/Magasin', (req,res)=>{
            this.MagasinController.updateMag(req.body).then(data=>res.json(data));
        })


        //catégorie
        this.express.post('/new/Categorie', (req, res) => {
            console.log(req.body);
            this.CatController.createCategorie(req.body)
                .then(data => res.json(data));
        });
        this.express.get('/find/Categorie', (req, res) => {
            console.log(req.body);
            this.CatController.getCatById(req.body)
                .then(data => res.json(data));
        });
        this.express.delete('/delete/Categorie', (req, res) => {
            console.log(req.body);
            this.CatController.deleteCat(req.body)
                .then(data => res.json(data));
        });

>>>>>>> main
}
}


export default new Road().express;