import { readFile, writeFile } from 'fs/promises'


export class TasksRepository{

    async findOne(id: string){

        const contents = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(contents);

        var res = tasks.find((task) => task.id == id);

        console.log(res);
        return res
    }

    async findAll(){

        const contents = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(contents);

        return tasks;

    }

    async create(task: string){

        const contents = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(contents);

        
        const id = Math.floor(Math.random() * 999);
        
        // tasks.push({"title": task});
        tasks.unshift({
            "id": id.toString(),
            "title": task,
        })


        await writeFile('tasks.json', JSON.stringify(tasks));

    }

    async delete(id: string){

        const contents = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(contents);

        const taskIndex =  tasks.findIndex((task) => task.id === id)
        // console.log(taskIndex);

        if(taskIndex == -1){
            return undefined;
        }
        
        var deleteTask = tasks.splice(taskIndex, 1);


        await writeFile('tasks.json', JSON.stringify(tasks));

        return deleteTask[0]


    }

    async update(id: string, task: string){

        const contents = await readFile('tasks.json', 'utf-8');
        const tasks = JSON.parse(contents);

        var taskUpdate =  tasks.find((task) => task.id == id)
        var taskIndex =  tasks.findIndex((task) => task.id == id)

        // console.log(taskIndex);

        if(taskIndex == -1){
            return undefined
        }

        taskUpdate = {
            "id": taskUpdate.id,
            "title": task
        }

        tasks[taskIndex] = taskUpdate;


        await writeFile('tasks.json', JSON.stringify(tasks));

        return taskUpdate


    }

}