import { User } from '.prisma/client';
import {
  Controller,
  Header,
  ImATeapotException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IncomingMessage } from 'http';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { readPost } from 'src/utils';

import { JustifyService } from './justify.service';

@Controller('justify')
export class JustifyController {
  constructor(private readonly justifyService: JustifyService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @Header('content-type', 'text/plain')
  async getTextJustified(@Request() req: IncomingMessage & { user: User }) {
    const text = await readPost(req);
    const currentTextTotalWordCount = text.split(' ').length;

    const willUserExceedFreeLimit =
      await this.justifyService.willUserExceedFreeLimit(
        req.user.email,
        currentTextTotalWordCount
      );

    if (willUserExceedFreeLimit) {
      throw new ImATeapotException();
    }

    return this.justifyService.justifyText(text);
  }
}
