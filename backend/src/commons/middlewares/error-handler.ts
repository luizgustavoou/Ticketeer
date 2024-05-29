import { Request, Response, NextFunction } from "express";
import { InternalServerError } from "../../exceptions/internal-server-error";
import { BaseError } from "../../exceptions/base-error";

export class ErrorHandler {
  private normalizeError(err: Error): BaseError {
    if (err instanceof BaseError) {
      return err;
    }

    return new InternalServerError(
      err,
      "Ocorreu algum erro interno no servidor. Por favor, tente novamente mais tarde."
    );
  }

  execute(err: Error, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
      return next(err);
    }

    const error = this.normalizeError(err);

    const statusCode = error.getStatusCode();
    const body = error.getBody();

    res.status(statusCode).json(body);
  }
}
