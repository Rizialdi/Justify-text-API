import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GetTokenDto } from './dto/getToken.dto';
import { BadRequestResponseEntity } from './entities/badRequest.entity';
import { ForbiddenResponseEntity } from './entities/forbidden.entity';
import { GetTokenEntity } from './entities/getToken.entity';
import { ProfileEntity } from './entities/profile.entity';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Authentication routes')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerUser')
  @ApiCreatedResponse({
    type: UserEntity,
    description: 'Register to use the service.',
  })
  @ApiForbiddenResponse({
    type: ForbiddenResponseEntity,
    description: 'Usually come from trying to use an already registered email.',
  })
  @ApiBadRequestResponse({ type: BadRequestResponseEntity })
  registerUser(@Body() body: CreateUserDto): Promise<UserEntity> {
    return this.authService.registerUser(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('getUserToken')
  @ApiCreatedResponse({ type: GetTokenEntity })
  @ApiUnauthorizedResponse({
    type: ForbiddenResponseEntity,
    description:
      'Right credentials where not given during the request.\n Set your token at the top of the file.',
  })
  async login(@Request() req, @Body() _: GetTokenDto) {
    return this.authService.getUserToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({
    type: ProfileEntity,
    description:
      'Get your email and name with one click. Be sure to be authenticated',
  })
  @ApiUnauthorizedResponse({ type: ForbiddenResponseEntity })
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
