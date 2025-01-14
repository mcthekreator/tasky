import { Controller , Get} from "@nestjs/common";
import { TaskService } from "../service/task.service";
import { TasksInterface } from "../model/task.model";

@Controller('task')
export class TaskController{


  constructor(private taskService: TaskService) {}

  @Get()
  public async getTask(): Promise <TasksInterface[]>{
    return this.taskService.getTask()
  }
}