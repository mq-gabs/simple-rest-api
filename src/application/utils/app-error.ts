export class AppError {
  message: string;
  code: number;
  details: any;

  constructor(msg?: string, code?: number, details?: any) {
    this.message = msg || "Internal Server Error";
    this.code = code || 500;
    this.details = details || null;
  }
}
