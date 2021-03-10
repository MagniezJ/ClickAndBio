import { connect } from "../data/bdd";
import { Magasin } from '../model/Magasin-model';
import { APILogger } from '../logger/logger';
import * as bcrypt from 'bcrypt';
export class MagasinRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getMagById(body) {
        const user = await Magasin.find({_id: body});
        console.log('commande:::', user);
        return user;
    }

    async createProduct(produit) {
        let data = {};
        try {
            data = await Magasin.create(produit);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
    async deleteProduit(commande) {
        let data={}
        try {

            const user = Magasin.findOneAndDelete({_id:commande._id});   
            data=user;       
        console.log('tasks:::',user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
    async updateMag(userId) {
        let data={}
        try {

            const user = Magasin.findOneAndUpdate({
            });   
            data=user;       
        console.log('tasks:::',user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
}