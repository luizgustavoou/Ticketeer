import { StatusCodes } from "http-status-codes";
import { BaseError } from "./base-error";

export class ConflictError extends BaseError {
  constructor(msg: string) {
    super(StatusCodes.CONFLICT, msg);
    this.name = "ConflictError";
    Object.setPrototypeOf(this, ConflictError.prototype);
  }
}
