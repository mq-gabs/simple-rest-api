import { TaskEntity } from "../task.entity";

describe("Test Task Entity", () => {
  it("should create instance", () => {
    const task = new TaskEntity();

    expect(task).toBeInstanceOf(TaskEntity);
  });

  it("should set and change props", () => {
    const firstTitle = "Do task 1";
    const secondTitle = "Do task 2";

    const task = new TaskEntity({
      title: firstTitle,
    });

    expect(task.title).toBe(firstTitle);

    task.title = secondTitle;

    expect(task.title).toBe(secondTitle);
  });

  test("create a task using other task props", () => {
    const task = new TaskEntity({
      title: "Do some task",
      description: "Do some task description",
    });

    const otherTask = new TaskEntity({
      title: "Do another task",
      description: "Do another task description",
    });

    otherTask.copyFrom(task);

    expect(otherTask.title).toBe(task.title);
    expect(otherTask.description).toBe(task.description);
    expect(otherTask.id).not.toBe(task.id);
  });
});
