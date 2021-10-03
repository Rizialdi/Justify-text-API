import { ApiProperty } from '@nestjs/swagger';

export class CreditEntity {
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  'lastest query date': string;
  @ApiProperty()
  'processed words today': number;
  @ApiProperty()
  'remaining words today': number;
}
