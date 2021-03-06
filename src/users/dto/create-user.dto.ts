import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    minLength: 5,
    required: true,
    description: 'Your name should at least contains 5 characters',
  })
  email: string;

  @ApiProperty({
    required: false,
    nullable: true,
    description:
      'Personalize your account by choosing a name. You can change it later',
  })
  name: string;

  @ApiProperty({
    minLength: 5,
    required: true,
    description: 'Your password should at least contains 5 characters',
  })
  password: string;
}
