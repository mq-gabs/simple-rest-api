import { BaseEntity, TBaseEntity } from "./base.entity";

export enum ETaskStatus {
  DONE = "DONE",
  PENDING = "PENDING",
  WORKING = "WORKING",
  CANCELLED = "CANCELLED",
}

type TTaskEntityProps = {
  title: string;
  description: string;
  status: ETaskStatus;
};

type TTaskEntity = TTaskEntityProps & TBaseEntity;

export class TaskEntity extends BaseEntity {
  constructor(private readonly props?: Partial<TTaskEntity>) {
    super(props);

    if (!this.props) {
      this.props = {};
    }

    this.title = this.props.title || "";
    this.description = this.props.description || "";
    this.status = this.props.status || ETaskStatus.PENDING;
  }

  public copyFrom(originalTask: TaskEntity) {
    this.title = originalTask.title || this.title;
    this.description = originalTask.description || this.description;
    this.status = originalTask.status || this.status;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(v: string) {
    this.props.title = v;
  }

  public get description(): string {
    return this.props.description;
  }

  public set description(v: string) {
    this.props.description = v;
  }

  public get status(): ETaskStatus {
    return this.props.status;
  }

  public set status(v: ETaskStatus) {
    this.props.status = v;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.props,
    };
  }
}
