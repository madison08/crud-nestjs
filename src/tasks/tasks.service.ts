import { Injectable } from "@nestjs/common";
import { TasksRepository } from "src/tasks.repository";


@Injectable()
export class TasksService{

    taskRepo: TasksRepository;

    constructor(){
        // le service est cree avec des dependance
        // A ne pas faire
        this.taskRepo = new TasksRepository();

    }

    findOne(id: string){
        return this.taskRepo.findOne(id);
    }

    findAll(){
        return this.taskRepo.findAll();
    }

    create(task: string){
        return this.taskRepo.create(task);
    }

    delete(id: string){
        return this.taskRepo.delete(id);
    }

    update(id: string, task: string){
        return this.taskRepo.update(id, task)
    }
}