import { Controller, Get, Body, Request, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('updatename')
  updateName(@Request() req: { user: User }, @Body() body: { name: string }) {
    return this.usersService.updateName(req.user.email, body.name);
  }

  @Put('updatepassword')
  updatePassword(
    @Request() req: { user: User },
    @Body() body: { password: string }
  ) {
    return this.usersService.updatePassword(req.user.email, body.password);
  }

  @Get('me')
  findOne(@Request() req: { user: User }) {
    return this.usersService.findMe(req.user.email);
  }
}
