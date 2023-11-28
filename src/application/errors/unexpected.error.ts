import { DomainError } from 'src/core/domain/error';

export class UnexpectedError extends Error implements DomainError {
  readonly statusCode: number;

  constructor(
    statusCode = 500,
    message = 'Ocorreu um erro inesperado, tente novamente mais tarde.',
  ) {
    super(message);
    this.name = 'UnexpectedError';
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, UnexpectedError.prototype);
  }
}
