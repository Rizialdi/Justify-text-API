import { ApiProperty } from '@nestjs/swagger';

export class ProfileEntity {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name?: string;
}
