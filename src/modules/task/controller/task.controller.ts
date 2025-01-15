import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from '../service/task.service';
import { TasksInterface } from '../model/task.model';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('get-task')
  public async getTask(): Promise<TasksInterface[]> {
    return this.taskService.getTask();
  }
  @Post('create-task')
  public async createTask(@Body('title')title: string, @Body('description')description: string){
    return this.taskService.createTask(title,description)
  }
}



