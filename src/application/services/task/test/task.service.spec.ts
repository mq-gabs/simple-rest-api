import { ETaskStatus, TaskEntity } from "../../../../domain/task.entity";
import { TaskRepositoryMemory } from "../../../../infra/repositories/memory/task.repository.memory";
import { ListResponse } from "../../../utils/list-response";
import { Query } from "../../../utils/query";
import { TaskDto } from "../dtos/task.dto";
import { TaskService } from "../task.service";

describe("Test Task Service", () => {
  let repo: TaskRepositoryMemory;
  let service: TaskService;

  beforeEach(() => {
    repo = new TaskRepositoryMemory();
    service = new TaskService(repo);
  });

  test("create task", async () => {
    const dto = new TaskDto();
    dto.title = "Title";
    dto.description = "Description";

    const task = await service.create(dto);

    expect(task).toBeInstanceOf(TaskEntity);
  });

  test("get many tasks", async () => {
    const dto = new TaskDto();
    dto.title = "Title";
    dto.description = "Description";

    const task = await service.create(dto);

    const response = await service.getMany(new Query());

    expect(response).toBeInstanceOf(ListResponse);
    expect(response.total).toBe(1);
    expect(response.list).toStrictEqual([task]);
  });

  test("get one task", async () => {
    const dto = new TaskDto();
    dto.title = "Title";
    dto.description = "Description";

    const task = await service.create(dto);

    const taskReturned = await service.getOne(task.id);

    expect(task).toStrictEqual(taskReturned);
  });

  test("update task", async () => {
    const dto = new TaskDto();
    dto.title = "Title";
    dto.description = "Description";

    const task = await service.create(dto);

    const updateDto = new TaskDto();
    updateDto.title = "Other title";
    updateDto.description = "Other description";
    updateDto.status = ETaskStatus.WORKING;

    const response = await service.update(task.id, updateDto);

    expect(response.id).toBe(task.id);
    expect(response.title).toBe(updateDto.title);
    expect(response.description).toBe(updateDto.description);
    expect(response.status).toBe(updateDto.status);
  });

  test("delete task", async () => {
    const dto = new TaskDto();
    dto.title = "Title";
    dto.description = "Description";

    const task = await service.create(dto);

    await service.delete(task.id);

    let error = null;

    try {
      await service.delete(task.id);
    } catch (err) {
      error = err;
    }

    expect(error).toBe(null);
  });
});
