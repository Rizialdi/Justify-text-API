import { Controller, Get, Body, Request, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreditEntity } from './entities/credit.entity';
import { UnauthorizedResponseEntity } from './entities/unauthorized.entity';
import {
  UpdateNameUserDto,
  UpdateUserPasswordDto,
} from './dto/update-user.dto';
import { UpdatePasswordEntity } from './entities/updatePassword.entity';
import { UpdateNameEntity } from './entities/updateName.entity';

@ApiTags('User routes')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('updatename')
  @ApiOkResponse({
    type: UpdateNameEntity,
    description: 'Change your name with one click.',
  })
  @ApiUnauthorizedResponse({
    type: UnauthorizedResponseEntity,
    description:
      'Right credentials where not given during the request.\n Set your token at the top of the file.',
  })
  updateName(@Request() req: { user: User }, @Body() body: UpdateNameUserDto) {
    return this.usersService.updateName(req.user.email, body.name);
  }

  @Put('updatepassword')
  @ApiOkResponse({
    type: UpdatePasswordEntity,
    description: 'Change your password with one click.',
  })
  @ApiUnauthorizedResponse({
    type: UnauthorizedResponseEntity,
    description:
      'Right credentials where not given during the request.\n Set your token at the top of the file.',
  })
  updatePassword(
    @Request() req: { user: User },
    @Body() body: UpdateUserPasswordDto
  ) {
    return this.usersService.updatePassword(req.user.email, body.password);
  }

  @Get('credits')
  @ApiOkResponse({
    type: CreditEntity,
    description: 'Get your credits and make sure to stay on free mode.',
  })
  @ApiUnauthorizedResponse({
    type: UnauthorizedResponseEntity,
    description:
      'Right credentials where not given during the request.\n Set your token at the top of the file.',
  })
  userCredits(@Request() req: { user: User }) {
    return this.usersService.userCredits(req.user.email);
  }
}
