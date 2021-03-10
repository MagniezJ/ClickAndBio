const env = require('dotenv').config(); //declaration du dot env
const User = require('../model/user-model'); //declaration du modeel user
import { APILogger } from '../logger/logger';
import { Produit } from '../service/produit';
import * as bcrypt from 'bcrypt';

export class ProduitController {
    private logger: APILogger;
    private Produit: Produit;

    constructor() {
        this.logger = new APILogger();
        this.Produit=new Produit();
    }
    async getProdById(body) {
        this.logger.info('Controller: getComById', null)
        return await this.Produit.getProdById(body);
    }
    async getProd(body) {
        this.logger.info('Controller: getComById', null)
        return await this.Produit.getProd(body);
    }

    async createProduct(produit) {
        this.logger.info('Controller: createCommande', produit);
        return await this.Produit.createProduct(produit);
    }

    async deleteProduit(produit){
        this.logger.info('Controller: delete commande', produit);
        return await this.Produit.deleteProduit(produit);
    }
}
