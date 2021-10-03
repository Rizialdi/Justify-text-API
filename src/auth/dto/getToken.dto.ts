import { ApiProperty } from '@nestjs/swagger';

export class GetTokenDto {
  @ApiProperty({
    required: true,
    description: 'Your email.',
  })
  email: string;

  @ApiProperty({
    required: true,
    description: 'Your password.',
  })
  password: string;
}
