import { Injectable } from '@nestjs/common';
import { TasksInterface, TaskStatus } from '../model/task.model';
import {v4 as uuid} from 'uuid'

@Injectable()
export class TaskService {
  private task: TasksInterface[] = [];

  public getTask() {
    return this.task;
  }

  public createTask(title: string, description: string) {
    const newTask: TasksInterface = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.DONE,
    };
    this.task.push(newTask);
    console.log(this.task);
    return newTask;
  }
}
