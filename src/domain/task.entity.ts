import { BaseEntity, TBaseEntity } from "./base.entity";

enum EStatus {
  DONE = "DONE",
  PENDING = "PENDING",
  WORKING = "WORKING",
  CANCELLED = "CANCELLED",
}

type TTaskEntityProps = {
  title: string;
  description: string;
  status: EStatus;
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
    this.status = this.props.status || EStatus.PENDING;
  }

  public copyFrom(originalTask: TaskEntity) {
    this.title = originalTask.title;
    this.description = originalTask.description;
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

  public get status(): EStatus {
    return this.props.status;
  }

  public set status(v: EStatus) {
    this.props.status = v;
  }
}
