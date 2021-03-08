import * as bodyParser from "body-parser";
import * as express from "express";
import { APILogger } from "../logger/logger";
import { UserController } from "../controllers/user-controller";
import { CommandeController } from "../controllers/commande-controller"
import fs = require('fs');

class Road{
    public express: express.Application;
    public logger: APILogger;
    public taskController:  UserController ;
    public CommandeController :CommandeController;

constructor() {
    this.express = express();
    this.routes();
    this.logger = new APILogger();
    this.taskController = new  UserController();
    this.CommandeController = new CommandeController();
}
    private routes(): void {
        this.express.get('/', (req, res) => {
            this.taskController.getUserByMail(req.body).then(data => res.json(data));
        });
        this.express.post('/create', (req, res) => {
            console.log(req.body);
            this.taskController.createUser(req.body)
                .then(data => res.json(data));
        });
        this.express.post('/Commande', (req, res) => {
            console.log(req.body);
            this.CommandeController.createCommande(req.body)
                .then(data => res.json(data));
        });
        this.express.get('/getcom', (req, res) => {
            this.CommandeController.getComById(req.body.id).then(data => res.json(data));
        });
        this.express.delete('/delete', (req, res) => {
            this.taskController.deleteTask(req.body).then(data => res.json(data));
        });
    
    // handle undefined routes
   // this.express.use();
}
}


export default new Road().express;