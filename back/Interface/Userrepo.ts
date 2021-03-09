import { connect } from "../data/bdd";
import { User } from '../model/user-model';
import { APILogger } from '../logger/logger';
import * as bcrypt from 'bcrypt';
export class TaskRepository {

    private logger: APILogger;

    constructor() {
        connect();
        this.logger = new APILogger()
    }

    async getUserByMail(body) {
        const user = await User.find({email:body.email});
             
          
        console.log('tasks:::', user);
        return user;
    }

    async createUser(user) {
        let data = {};
        try {
            data = await User.create(user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
    async deleteTask(taskId) {
        let data={}
        try {

            const user = User.findOneAndDelete({email:taskId.email});   
            data=user;       
        console.log('tasks:::',user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
    async updateUser(userId) {
        let data={}
        try {

            const user = User.findOneAndUpdate({email:userId.email,passWord: userId.passWord,
                firstName: userId.firstName,lastName: userId.lastName
            });   
            data=user;       
        console.log('tasks:::',user);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }
}