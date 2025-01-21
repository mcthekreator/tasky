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
    const {title, description} = createTaskDTO;
    const newTask: TasksInterface = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.task.push(newTask);
    return newTask
  }

  public getTaskById(id: string): TasksInterface{
    return this.task.find((task: TasksInterface)=> id === task.id)
  }

  public searchTask(titleKeyword: string): TasksInterface[]{
    return this.task.filter((task: TasksInterface) => titleKeyword === task.title )
  }

  public updateStatus(titleKeyword: string, id: string): TasksInterface{
    const updatedTask: TasksInterface = this.task.find((task)=> id === task.id)
    updatedTask.title = titleKeyword;
    return updatedTask
  }
  }