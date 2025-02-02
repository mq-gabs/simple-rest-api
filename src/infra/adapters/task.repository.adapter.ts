import { ListResponse } from "../../application/utils/list-response";
import { Query } from "../../application/utils/query";
import { TaskEntity } from "../../domain/task.entity";

export interface ITaskRepositoryAdapter {
  save(task: TaskEntity): Promise<TaskEntity>;
  list(query: Query): Promise<ListResponse<TaskEntity>>;
  getOne(id: string): Promise<TaskEntity>;
  update(id: string, task: TaskEntity): Promise<TaskEntity>;
  delete(id: string): Promise<void>;
}
