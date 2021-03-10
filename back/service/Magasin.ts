import { MagasinRepository } from '../Interface/Magasinrepository';

export class Magasin {

    private MagasinRepository: MagasinRepository;

    constructor() {
        this.MagasinRepository = new MagasinRepository();
    }

    async getMagById(body) {
        return await this.MagasinRepository.getMagById(body);
    }

    async createProduct(product) {
        return await this.MagasinRepository.createProduct(product);
    }
    async deleteProduit(product) {
        return await this.MagasinRepository.deleteProduit(product);
    }
    async UpdateMag(userId){
        return await this.MagasinRepository.updateMag(userId)
    }
}