import { model, Schema, Model, Document } from 'mongoose';

export interface Iprod extends Document {
    SKU: string;
    Prix: string;
    Nom: string;
    Quantité: string;
    Description: string;
    images: string;
}

const ProdSchema:Schema = new Schema({
    SKU: { type: String},
    Prix: { type: String},
    Nom: { type: String},
    Quantité: { type: String},
    Description: { type: String},
    images: { type: String}
});



export const Produit: Model<Iprod> = model<Iprod>('Produits', ProdSchema);