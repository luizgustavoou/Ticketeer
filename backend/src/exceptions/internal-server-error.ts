import { StatusCodes } from "http-status-codes";
import { BaseError } from "./base-error";

export class InternalServerError extends BaseError {
  constructor(err: Error, msg: string) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, msg);
    this.name = "InternalServerError";

    Object.setPrototypeOf(this, InternalServerError.prototype);

    // Recomendo monitorar este log, pois num cenário ideal, ele nunca deveria acontecer
    // Aqui você pode utilizar a biblioteca de logs que quiser
    console.log({
      message: err.message,
      stackTrace: err.stack,
      level: "fatal",
    });
  }
}
