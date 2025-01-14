import { Controller , Get} from "@nestjs/common";
import { TaskService } from "../service/task.service";

@Controller('task')
export class TaskController{

  private  task = []
  constructor(private taskService: TaskService) {}

  @Get()
  public async getTask(): Promise <string>{
    return this.taskService.getTask()
  }
}