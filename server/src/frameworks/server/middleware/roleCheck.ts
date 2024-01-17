import { customRequest } from "./../../../types/expressCustomRequest";
import { NextFunction, Response } from "express";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";

export const userRoleCheckMiddleware = (
  req: customRequest,
  res: Response,
  next: NextFunction
) => {
  const role = req.payload?.role;
  if (role === "user") {
    next();
  } else {
    throw new AppError("unauthenticated role", HttpStatus.UNAUTHORIZED);
  }
};
