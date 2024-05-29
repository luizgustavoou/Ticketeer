import { StatusCodes } from "http-status-codes";
import { BaseError } from "./base-error";

export class ForbiddenError extends BaseError {
  constructor(msg: string) {
    super(StatusCodes.FORBIDDEN, msg);
    this.name = "ForbiddenError";
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
