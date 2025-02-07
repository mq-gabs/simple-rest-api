type TQuery = {
  page: number;
  pageSize: number;
  term: string;
};

export class Query {
  constructor(private readonly props?: any) {
    if (!props) {
      this.props = {} as TQuery;
    }

    this.page = this.props.page || 0;
    this.pageSize = this.props.pageSize || 10;
    this.term = this.props.term || "";
  }

  public get(key: string) {
    return this.props[key];
  }

  public get page(): number {
    return this.props.page;
  }

  public set page(v: number) {
    this.props.page = v;
  }

  public get pageSize(): number {
    return this.props.pageSize;
  }

  public set pageSize(v: number) {
    this.props.pageSize = v;
  }

  public get term(): string {
    return this.props.term;
  }

  public set term(v: string) {
    this.props.term = v;
  }
}
