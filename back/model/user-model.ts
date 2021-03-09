import { model, Schema, Model, Document } from 'mongoose';
const bcrypt=require("bcrypt");
import { Commande } from './commande-model';
export interface ITask extends Document {
    email: string;
    passWord: string;
    firstName: string;
    lastName: string;
    Commandes: [{Commande}]
}

const UserSchema:Schema = new Schema({
  email: {type: String},
  passWord:{type: String},
  firstName: {type: String},
  lastName: {type: String },
  Commandes: {type: [{Commande}]}
});



export const User: Model<ITask> = model<ITask>('users', UserSchema);