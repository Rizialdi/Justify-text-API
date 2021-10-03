import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordEntity {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}
