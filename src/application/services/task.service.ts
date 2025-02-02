import { ITaskRepositoryAdapter } from "../../infra/adapters/task.repository.adapter";

export class TaskService {
  constructor(readonly repo: ITaskRepositoryAdapter) {}

  async create() {}
}
