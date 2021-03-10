const env = require('dotenv').config(); //declaration du dot env
import { APILogger } from '../logger/logger';
import { Magasin } from '../service/Magasin';
import * as bcrypt from 'bcrypt';

export class MagasinController {
    private logger: APILogger;
    private Magasin: Magasin;

    constructor() {
        this.logger = new APILogger();
        this.Magasin=new Magasin();
    }
    async getMagById(body) {
        this.logger.info('Controller: getComById', null)
        return await this.Magasin.getMagById(body);
    }

    async createMagasin(produit) {
        this.logger.info('Controller: createCommande', produit);
        return await this.Magasin.createProduct(produit);
    }

    async deleteMagasin(produit){
        this.logger.info('Controller: delete commande', produit);
        return await this.Magasin.deleteProduit(produit);
    }
    async updateMag(user){
        this.logger.info('Controller: UpdateUser', user);
        
        return await this.Magasin.UpdateMag(user);
    }
}
