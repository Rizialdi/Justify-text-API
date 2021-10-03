import { ApiProperty } from '@nestjs/swagger';

export class PaymentRequiredResponseEntity {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}
