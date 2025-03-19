import { NextFunction, Request, Response } from "express";
import { AppError } from "./app-error";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error({ err });

  if (err instanceof AppError) {
    res.status(err.code).json({
      message: err.message,
      details: err.details,
    });
    return next();
  }

  res.status(500).json({
    message: "Internal Server Error",
    details: err.toString(),
  });
  return next();
}
