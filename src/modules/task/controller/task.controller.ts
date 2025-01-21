import { Body, Controller, Get, Param, Post, Patch } from "@nestjs/common";
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
  public async createTask(@Body() createTaskDTO: createTaskDTO): Promise <TasksInterface>{
    return this.taskService.createTask(createTaskDTO)
  }
  @Post('get-task/:id')
  public  async getTaskById(@Param('id') id: string) : Promise <TasksInterface>{
    return this.taskService.getTaskById(id)
  }
  @Post('search-task/:title')
  public  async searchTask(@Param('title')title: string) :Promise<TasksInterface[]>{
    return this.taskService.searchTask(title)
  }
  @Patch('change-task-status/:id')
  public async updateTaskStatus(@Body('title') title:string,  @Param('id') id: string){
  return this.taskService.updateStatus(title, id)
  }

}



