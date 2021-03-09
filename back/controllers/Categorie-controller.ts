const env = require('dotenv').config(); //declaration du dot env
import { APILogger } from '../logger/logger';
import { Categorie } from '../service/categorie';
import * as bcrypt from 'bcrypt';

export class CatController {
    private logger: APILogger;
    private  Categorie:  Categorie;

    constructor() {
        this.logger = new APILogger();
        this.Categorie=new  Categorie();
    }
    async getCatById(body) {
        this.logger.info('Controller: getComById', null)
        return await this.Categorie.getCatById(body);
    }

    async createCategorie(cat) {
        this.logger.info('Controller: createCommande', cat);
        return await this.Categorie.createCat(cat);
    }

    async deleteCat(cat){
        this.logger.info('Controller: delete commande', cat);
        return await this.Categorie.deleteCat(cat);
    }
    
}
