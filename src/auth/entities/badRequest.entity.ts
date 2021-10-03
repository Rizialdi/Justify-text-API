import { ApiProperty } from '@nestjs/swagger';

export class BadRequestResponseEntity {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}
