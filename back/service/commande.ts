import { CommandeRepository } from '../Interface/Commrepo';

export class Commande {

    private CommandeRepository: CommandeRepository;

    constructor() {
        this.CommandeRepository = new CommandeRepository();
    }

    async getComById(body) {
        return await this.CommandeRepository.getComById(body);
    }

    async createCommande(commande) {
        return await this.CommandeRepository.createCommande(commande);
    }

}