import { model, Schema, Model, Document } from 'mongoose';
const bcrypt=require("bcrypt");

export interface ICom extends Document {
    Magasin: string;
    Heurerdv: string;
    Daterdv: string;
    Etat: string;
    Produits: [string]
}

const CommandeSchema:Schema = new Schema({
    Magasin: {type: String},
    Heurerdv:{type: String},
    Daterdv: {type: String},
    Etat: {type: String },
    Produits:{type: [String]}
});



export const Commande: Model<ICom> = model<ICom>('commande', CommandeSchema);