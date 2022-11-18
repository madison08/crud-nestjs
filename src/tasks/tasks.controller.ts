import { Body, Controller, Delete, Get, Injectable, NotFoundException, Param, Post, Put, Req } from '@nestjs/common';
import { TasksDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {

    constructor(public tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.findAll();
    }

    @Get(':id')
    async getTask(@Param('id') id: string){

        const task = await this.tasksService.findOne(id);

        if(!task){
            throw new NotFoundException('task not found');
        }

        return task;
    }

    @Post()
    createTask(@Body() body: TasksDto){
        return this.tasksService.create(body.title);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        const task = await this.tasksService.delete(id);

        // console.log(task);

        if(!task || task == undefined){
            throw new NotFoundException('task not found');
        }

        return task;
    }

    @Put(':id')
    async updateTask(@Param('id') id: string,@Body() body: TasksDto){
        const task  = await this.tasksService.update(id, body.title)

        if(task == undefined){
            throw new NotFoundException('task not found')
        }

        return task
    }

}
