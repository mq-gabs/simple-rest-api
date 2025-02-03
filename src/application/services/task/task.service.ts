import { TaskEntity } from "../../../domain/task.entity";
import { ITaskRepositoryAdapter } from "../../../infra/adapters/task.repository.adapter";
import { ListResponse } from "../../utils/list-response";
import { Query } from "../../utils/query";
import { TaskDto } from "./dtos/task.dto";

export class TaskService {
  constructor(readonly repo: ITaskRepositoryAdapter) {}

  async create(dto: TaskDto): Promise<TaskEntity> {
    const task = new TaskEntity({
      title: dto.title,
      description: dto.description,
    });

    return await this.repo.save(task);
  }

  async getMany(query: Query): Promise<ListResponse<TaskEntity>> {
    return await this.repo.list(query);
  }

  async getOne(id: string): Promise<TaskEntity> {
    return await this.repo.getOne(id);
  }

  async update(id: string, dto: TaskDto): Promise<TaskEntity> {
    const task = new TaskEntity({
      title: dto.title,
      description: dto.description,
      status: dto.status,
    });

    return await this.repo.update(id, task);
  }

  async delete(id: string) {
    await this.repo.delete(id);
  }
}
