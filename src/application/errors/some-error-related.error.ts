import { DomainError } from 'src/core/domain/error';

type SomeErrorRelatedErrorProps = {
  message: string;
  name: string;
  statusCode: number;
};

export class SomeErrorRelatedError extends Error implements DomainError {
  private _statusCode: number;

  constructor({ message, name, statusCode = 500 }: SomeErrorRelatedErrorProps) {
    super(message);
    this.name = name;
    this._statusCode = statusCode;
  }

  get message() {
    return this.message;
  }

  get statusCode() {
    return this._statusCode;
  }
}
