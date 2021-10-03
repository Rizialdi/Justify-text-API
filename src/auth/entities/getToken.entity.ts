import { ApiProperty } from '@nestjs/swagger';

export class GetTokenEntity {
  @ApiProperty()
  access_token: string;
}
