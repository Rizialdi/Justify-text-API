import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    description: 'Your email.',
  })
  email: string;

  @ApiProperty({
    required: false,
    nullable: true,
    description:
      'Personalize your account by choosing a name. You can change it later.',
  })
  name: string;

  @ApiProperty({
    required: true,
    description: 'Your password.',
  })
  password: string;
}
