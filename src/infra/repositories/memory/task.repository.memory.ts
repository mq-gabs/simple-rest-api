import { Query } from "../../../application/utils/query";
import { ListResponse } from "../../../application/utils/list-response";
import { TaskEntity } from "../../../domain/task.entity";
import { ITaskRepositoryAdapter } from "../../adapters/task.repository.adapter";
import { AppError } from "../../../application/utils/app-error";

export class TaskRepositoryMemory implements ITaskRepositoryAdapter {
  tasks: TaskEntity[] = [];

  async save(task: TaskEntity): Promise<TaskEntity> {
    this.tasks.push(task);
    return task;
  }

  async list(query: Query): Promise<ListResponse<TaskEntity>> {
    const matchedTasks = this.tasks.filter((task) =>
      task.title.toLowerCase().includes(query.term.toLowerCase())
    );

    const list = matchedTasks.slice(
      query.page * query.pageSize,
      query.pageSize * (1 + query.page)
    );

    return new ListResponse<TaskEntity>(list, matchedTasks.length);
  }

  async getOne(id: string): Promise<TaskEntity> {
    const foundTask = this.tasks.find((task) => task.id === id);

    if (!foundTask) {
      throw new AppError("Task not found", 404);
    }

    return foundTask;
  }

  async update(id: string, task: TaskEntity): Promise<TaskEntity> {
    const foundTask = await this.getOne(id);

    foundTask.copyFrom(task);

    foundTask.updated_at = new Date().toJSON();

    this.tasks = this.tasks.map((t) => (t.id === id ? foundTask : t));

    return foundTask;
  }

  async delete(id: string): Promise<void> {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
