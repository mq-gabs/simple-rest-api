export class ListResponse<T> {
  constructor(readonly list: T[], readonly total: number) {}
}
