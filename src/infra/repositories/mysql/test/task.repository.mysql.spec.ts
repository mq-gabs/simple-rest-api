import { getConnection } from "..";
import { ListResponse } from "../../../../application/utils/list-response";
import { Query } from "../../../../application/utils/query";
import { TaskRepositoryMysql } from "../task.repository.mysql";

describe("Mysql Repository", () => {
  let repo: TaskRepositoryMysql;

  beforeEach(() => {
    repo = new TaskRepositoryMysql();
  });

  test("create connection", async () => {
    const conn = await getConnection();

    let err = null;

    try {
      await conn.query("SELECT 1");
    } catch (error) {
      err = error;
    } finally {
      conn.end();
    }

    expect(err).toBe(null);
  });

  test("list tasks", async () => {
    let err = null;
    let result = null;

    try {
      result = await repo.list(new Query());
    } catch (error) {
      err = error;
    }

    expect(err).toBe(null);
    expect(result).toStrictEqual(new ListResponse([], 0));
  });
});
