import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}
