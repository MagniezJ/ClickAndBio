import { connect } from "../data/bdd";
import { Categorie } from '../model/catégorie-model';
import { APILogger } from '../logger/logger';
export class CatRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getCatById(body) {
        const user = await Categorie.find({_id: body});
        console.log('commande:::', user);
        return user;
    }

    async createCat(cat) {
        let data = {};
        try {
            data = await Categorie.create(cat);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
    async deleteCat(cat) {
        let data={}
        try {

            const user = Categorie.findOneAndDelete({_id:cat._id});   
            data=user;       
        console.log('tasks:::',user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
}