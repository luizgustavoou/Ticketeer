export class BaseError extends Error {
  private statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;

    Object.setPrototypeOf(this, BaseError.prototype); // forçar herança
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  getBody() {
    return {
      errors: [this.message],
    };
  }
}
