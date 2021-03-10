import { ProduitRepository } from '../Interface/Prodrepo';

export class Produit {

    private ProduitRepository: ProduitRepository;

    constructor() {
        this.ProduitRepository = new ProduitRepository();
    }

    async getProdById(body) {
        return await this.ProduitRepository.getComById(body);
    }

    async createProduct(product) {
        return await this.ProduitRepository.createProduct(product);
    }
    async deleteProduit(product) {
        return await this.ProduitRepository.deleteProduit(product);
    }
}