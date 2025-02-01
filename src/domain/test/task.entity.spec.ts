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
});
