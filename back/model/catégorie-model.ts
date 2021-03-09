import { model, Schema, Model, Document } from 'mongoose';

export interface Icat extends Document {
    email: string;
    passWord: string;
    Nom: string;
    Disponibilités: [string];
}

const CatSchema:Schema = new Schema({
  email: {type: String},
  passWord:{type: String},
  firstName: {type: String},
  Disponibilités: {type: [String]}
});



export const Categorie: Model<Icat> = model<Icat>('Categorie', CatSchema);