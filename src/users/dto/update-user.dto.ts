import { ApiProperty } from '@nestjs/swagger';

export class UpdateNameUserDto {
  @ApiProperty()
  name: string;
}

export class UpdateUserPasswordDto {
  @ApiProperty()
  password: string;
}
