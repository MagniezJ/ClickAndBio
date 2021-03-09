const env = require('dotenv').config(); //declaration du dot env
const User = require('../model/user-model'); //declaration du modeel user
import { APILogger } from '../logger/logger';
import { TaskService } from '../service/service';
import * as bcrypt from 'bcrypt';

export class UserController {
    private taskService: TaskService;
    private logger: APILogger;

    constructor() {
        this.taskService = new TaskService();
        this.logger = new APILogger()
    }
       

    async getUserByMail(body) {
        this.logger.info('Controller: getTasks', null)
        return await this.taskService.getUserByMail(body);
    }
    async deleteTask(taskId) {
        this.logger.info('Controller: deleteTask', taskId);
        return await this.taskService.deleteTask(taskId);
    }
    async createUser(user) {
        this.logger.info('Controller: createTask', user);
        
        return await this.taskService.createUser(user);
    }
    async updateUser(user){
        this.logger.info('Controller: UpdateUser', user);
        
        return await this.taskService.UpdateUser(user);
    }
}
