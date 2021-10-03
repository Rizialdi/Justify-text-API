import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailInUseException extends HttpException {
  constructor() {
    super(
      'The email used for the request is already in use',
      HttpStatus.FORBIDDEN
    );
  }
}
