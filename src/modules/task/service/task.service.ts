import { Injectable } from '@nestjs/common';
import { TasksInterface, TaskStatus } from '../model/task.model';

@Injectable()
export class TaskService {
  private task: TasksInterface[] = [];

  public getTask() {
    return this.task;
  }

  public createTask(title: string, description: string) {
    const newTask: TasksInterface = {
      id: 'adfdfz',
      title: title,
      description: 'dfjdfsjhfs',
      status: TaskStatus.DONE,
    };
    this.task.push(newTask);
    console.log(this.task);
    return newTask;
  }
}
