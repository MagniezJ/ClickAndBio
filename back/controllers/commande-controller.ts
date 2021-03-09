const env = require('dotenv').config(); //declaration du dot env
const User = require('../model/user-model'); //declaration du modeel user
import { APILogger } from '../logger/logger';
import { Commande } from '../service/commande';
import * as bcrypt from 'bcrypt';

export class CommandeController {
    private logger: APILogger;
    private Commande: Commande;

    constructor() {
        this.logger = new APILogger();
        this.Commande=new Commande();
    }
    async getComById(body) {
        this.logger.info('Controller: getComById', null)
        return await this.Commande.getComById(body);
    }

    async createCommande(commande) {
        this.logger.info('Controller: createCommande', commande);
        return await this.Commande.createCommande(commande);
    }

    async delete(commande){
        this.logger.info('Controller: delete commande', commande);
        return await this.Commande.delete(commande);
    }
}
