import { Module } from '@nestjs/common';
import { TaskController } from "./controller/task.controller";
import { TaskService } from "./service/task.service";

@Module({
  imports:[],
  providers:[TaskService],
  controllers: [TaskController],
  exports:[]

})
export class TaskModule {}
