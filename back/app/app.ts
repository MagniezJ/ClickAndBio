import * as bodyParser from "body-parser";
import * as express from "express";
import  Road from "../route/road";
import fs = require('fs');
import * as cors from "cors"
class App {

    public express: express.Application;


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        var corsOptions={ //options d autorisation d acces
  origin:"http://localhost:3000" //URL front 
}
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(function(req, res, next) { //autorisation pour fetch
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
          this.express.use(function (err, req, res, next) {
            console.log('This is the invalid field ->', err.field)
            next(err)
          })
          this.express.use(cors())
          this.express.use(cors(corsOptions))
    }
    routes():void{
        this.express.use('/', Road)
    }
 
}

export default new App().express;