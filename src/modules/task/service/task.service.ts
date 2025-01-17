import { Injectable } from '@nestjs/common';
import { TasksInterface, TaskStatus } from '../model/task.model';
import {v4 as uuid} from 'uuid'
import { createTaskDTO } from "../dto/create-tasks-dto";

@Injectable()
export class TaskService {
  private task: TasksInterface[] = [];

  public getTask() {
    return this.task;
  }

  public createTask( createTaskDTO: createTaskDTO ){
    const {title, description} = createTaskDTO
    const newTask: TasksInterface = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.task.push(newTask);
    return newTask;
  }
}
