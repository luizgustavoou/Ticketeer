import { StatusCodes } from "http-status-codes";
import { BaseError } from "./base-error";

export class UnauthorizedError extends BaseError {
  constructor(msg: string) {
    super(StatusCodes.UNAUTHORIZED, msg);
    this.name = "UnauthorizedError";
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
}
