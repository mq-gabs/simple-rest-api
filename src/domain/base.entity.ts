import { v7, validate } from "uuid";
import { AppError } from "../application/utils/app-error";

export type TBaseEntity = {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export class BaseEntity {
  constructor(private readonly baseProps?: Partial<TBaseEntity>) {
    if (!this.baseProps) {
      this.baseProps = {};
    }

    this.id = this.baseProps.id || v7();

    const newDate = new Date().toJSON();
    this.created_at = this.baseProps.created_at || newDate;
    this.updated_at = this.baseProps.updated_at || newDate;
    this.deleted_at = this.baseProps.deleted_at || null;
  }

  public get id(): string {
    return this.baseProps.id;
  }

  public set id(v: string) {
    if (!validate(v)) {
      throw new AppError(`ERROR: ${v} is not valid UUID`);
    }

    this.baseProps.id = v;
  }

  public get created_at(): string {
    return this.baseProps.created_at;
  }

  public set created_at(v: string) {
    this.baseProps.created_at = v;
  }

  public get updated_at(): string {
    return this.baseProps.updated_at;
  }

  public set updated_at(v: string) {
    this.baseProps.updated_at = v;
  }

  public get deleted_at(): string {
    return this.baseProps.deleted_at;
  }

  public set deleted_at(v: string) {
    this.baseProps.deleted_at = v;
  }
}
