import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty()
  user: {
    id: string;
    email: string;
    name?: string;
  };
  @ApiProperty()
  access_token: string;
}
