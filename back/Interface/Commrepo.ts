import { connect } from "../data/bdd";
import { Commande } from '../model/commande-model';
import { APILogger } from '../logger/logger';
import * as bcrypt from 'bcrypt';
export class CommandeRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getComById(body) {
        const user = await Commande.find({_id: body});
        console.log('commande:::', user);
        return user;
    }

    async createCommande(commande) {
        let data = {};
        try {
            data = await Commande.create(commande);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}