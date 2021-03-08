import { TaskRepository } from '../Interface/Userrepo';

export class TaskService {

    private taskRepository: TaskRepository;

    constructor() {
        this.taskRepository = new TaskRepository();
    }

    async getUserByMail(body) {
        return await this.taskRepository.getUserByMail(body);
    }

    async createUser(user) {
        return await this.taskRepository.createUser(user);
    }

    async deleteTask(taskId) {
        return await this.taskRepository.deleteTask(taskId);
    }
}