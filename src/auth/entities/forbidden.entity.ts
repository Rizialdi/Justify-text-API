import { ApiProperty } from '@nestjs/swagger';

export class ForbiddenResponseEntity {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}
