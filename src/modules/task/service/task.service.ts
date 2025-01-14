import { Injectable } from "@nestjs/common";
import { TasksInterface } from "../model/task.model";

@Injectable()
export class TaskService{

  private task: TasksInterface[] = []
  public getTask(){
    return this.task
  }
}