import { model, Schema, Model, Document } from 'mongoose';

export interface Imag extends Document {
    email: string;
    passWord: string;
    Nom: string;
    Disponibilités: [string];
}

const MagSchema:Schema = new Schema({
  email: {type: String},
  passWord:{type: String},
  firstName: {type: String},
  Disponibilités: {type: [String]}
});



export const Magasin: Model<Imag> = model<Imag>('Magasins', MagSchema);