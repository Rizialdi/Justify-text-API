import { ApiProperty } from '@nestjs/swagger';

export class UpdateNameEntity {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}
