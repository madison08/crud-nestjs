import { IsString,IsNumber } from 'class-validator';

export class TasksDto{
    @IsString()
    title: string

}