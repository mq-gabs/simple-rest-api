import { ETaskStatus } from "../../../../domain/task.entity";

export class TaskDto {
  public title: string;
  public description: string;
  public status: ETaskStatus;
}
