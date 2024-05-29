import { StatusCodes } from "http-status-codes";
import { BaseError } from "./base-error";

export class NotFoundError extends BaseError {
  constructor(msg: string) {
    super(StatusCodes.NOT_FOUND, msg);
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
