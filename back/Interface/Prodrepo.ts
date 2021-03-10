import { connect } from "../data/bdd";
import { Produit } from '../model/Produit-model';
import { APILogger } from '../logger/logger';
import * as bcrypt from 'bcrypt';
export class ProduitRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getComById(body) {
        const user = await Produit.find({_id: body});
        console.log('commande:::', user);
        return user;
    }
    async getProd(body) {
        const user = await Produit.find({});
        console.log('commande:::', user);
        return user;
    }

    async createProduct(produit) {
        let data = {};
        try {
            data = await Produit.create(produit);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
    async deleteProduit(commande) {
        let data={}
        try {

            const user = Produit.findOneAndDelete({_id:commande._id});   
            data=user;       
        console.log('tasks:::',user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
}