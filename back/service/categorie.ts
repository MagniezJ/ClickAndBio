import { CatRepository } from '../Interface/CatRepository';

export class Categorie {

    private CatRepository: CatRepository;

    constructor() {
        this.CatRepository = new CatRepository();
    }

    async getCatById(body) {
        return await this.CatRepository.getCatById(body);
    }

    async createCat(cat) {
        return await this.CatRepository.createCat(cat);
    }
    async deleteCat(cat) {
        return await this.CatRepository.deleteCat(cat);
    }
}