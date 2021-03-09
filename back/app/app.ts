import * as bodyParser from "body-parser";
import * as express from "express";
import  Road from "../route/road";
import fs = require('fs');

class App {

    public express: express.Application;


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes():void{
        this.express.use('/', Road)
    }
   
}

export default new App().express;