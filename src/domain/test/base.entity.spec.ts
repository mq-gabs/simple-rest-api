import { v7 } from "uuid";
import { BaseEntity } from "../base.entity";

describe("Test Base Entity", () => {
  it("should create instance", () => {
    const base = new BaseEntity();

    expect(base).toBeInstanceOf(BaseEntity);
  });

  test("UUID validation", () => {
    const base = new BaseEntity();

    expect(() => {
      base.id = "123";
    }).toThrow();
  });

  it("should set UUID manually", () => {
    const uuid = v7();
    const base = new BaseEntity({
      id: uuid,
    });

    expect(base.id).toBe(uuid);
  });
});
