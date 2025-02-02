import { ListResponse } from "../../../../application/utils/list-response";
import { Query } from "../../../../application/utils/query";
import { TaskEntity } from "../../../../domain/task.entity";
import { TaskRepositoryMemory } from "../task.repository.memory";

describe("Test Task Memory Repository", () => {
  let task: TaskEntity;
  let repo: TaskRepositoryMemory;

  beforeEach(() => {
    task = new TaskEntity({
      title: "Title example",
      description: "Description example",
    });
    repo = new TaskRepositoryMemory();
  });

  it("should create instance", () => {
    expect(repo).toBeInstanceOf(TaskRepositoryMemory);
  });

  it("should save task", () => {
    repo.save(task);

    expect(repo.tasks).toStrictEqual([task]);
  });

  it("should list tasks", async () => {
    repo.save(task);

    const result = await repo.list(new Query());

    expect(result).toStrictEqual(new ListResponse([task], 1));
  });

  it("should get one task", async () => {
    repo.save(task);

    const foundTask = await repo.getOne(task.id);

    expect(foundTask).toStrictEqual(task);
  });

  it("should update task", async () => {
    repo.save(task);

    const taskWithNewProps = new TaskEntity({
      title: "New title",
      description: "New description",
    });

    repo.update(task.id, taskWithNewProps);

    const foundTask = await repo.getOne(task.id);

    expect(foundTask.title).toBe(taskWithNewProps.title);
    expect(foundTask.description).toBe(taskWithNewProps.description);
  });

  it("should delete task", async () => {
    await repo.save(task);
    await repo.delete(task.id);

    let error = null;
    try {
      await repo.getOne(task.id);
    } catch (err) {
      error = err;
    }

    expect(error).not.toBe(null);
  });
});
