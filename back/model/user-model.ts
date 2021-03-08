import { model, Schema, Model, Document } from 'mongoose';
const bcrypt=require("bcrypt");

export interface ITask extends Document {
    email: string;
    passWord: string;
    firstName: string;
    lastName: string;
}

const UserSchema:Schema = new Schema({
  email: {type: String},
  passWord:{type: String},
  firstName: {type: String},
  lastName: {type: String }
});



export const User: Model<ITask> = model<ITask>('users', UserSchema);