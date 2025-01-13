import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskService{



  public getTask(){
    return "All task "
  }
}