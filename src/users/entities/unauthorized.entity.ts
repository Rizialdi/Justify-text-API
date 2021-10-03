import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedResponseEntity {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}
