import { getConnection } from ".";
import { AppError } from "../../../application/utils/app-error";
import { ListResponse } from "../../../application/utils/list-response";
import { Query } from "../../../application/utils/query";
import { TaskEntity } from "../../../domain/task.entity";
import { ITaskRepositoryAdapter } from "../../adapters/task.repository.adapter";

export class TaskRepositoryMysql implements ITaskRepositoryAdapter {
  async save(task: TaskEntity): Promise<TaskEntity> {
    const conn = await getConnection();

    const {
      id,
      title,
      description,
      status,
      created_at,
      updated_at,
      deleted_at,
    } = task.toJSON();

    try {
      await conn.query(
        `
        INSERT INTO
        tasks(id, title, description, status, created_at, updated_at, deleted_at)
        VALUES(?, ?, ?, ?, ?, ?, ?);
        `,
        [id, title, description, status, created_at, updated_at, deleted_at]
      );
    } catch (error) {
      throw new AppError("Cannot save task", 500, error);
    } finally {
      conn.end();
    }

    return task;
  }

  async list(query: Query): Promise<ListResponse<TaskEntity>> {
    let queryString = "SELECT * FROM tasks";

    if (query.term.length !== 0) {
      queryString += ` WHERE name ILIKE %${query.term}%`;
    }

    queryString += ` LIMIT ${query.pageSize} OFFSET ${
      query.page * query.pageSize
    }`;

    console.log({ queryString });

    const conn = await getConnection();

    try {
      const [result] = await conn.query(queryString);
      console.log({ result });
    } catch (error) {
      throw new AppError("Cannot list tasks", 500, error);
    } finally {
      conn.end();
    }

    return new ListResponse([], 0);
  }

  getOne(id: string): Promise<TaskEntity> {
    throw new AppError("Not Implemented", 501);
  }

  update(id: string, task: TaskEntity): Promise<TaskEntity> {
    throw new AppError("Not Implemented", 501);
  }

  delete(id: string): Promise<void> {
    throw new AppError("Not Implemented", 501);
  }
}
