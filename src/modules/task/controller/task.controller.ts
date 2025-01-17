import { Body, Controller, Get, Post } from "@nestjs/common";
import { TaskService } from '../service/task.service';
import { TasksInterface } from '../model/task.model';
import { createTaskDTO } from "../dto/create-tasks-dto";

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('get-task')
  public async getTask(): Promise<TasksInterface[]> {
    return this.taskService.getTask();
  }
  @Post( 'create-task')
  public async createTask(@Body() createTaskDTO: createTaskDTO){
    return this.taskService.createTask(createTaskDTO)
  }
}



