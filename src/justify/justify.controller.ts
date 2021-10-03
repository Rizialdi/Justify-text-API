import { User } from '.prisma/client';
import {
  Body,
  Controller,
  Header,
  HttpException,
  ImATeapotException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiHeader,
  ApiTags,
} from '@nestjs/swagger';
import { IncomingMessage } from 'http';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { readPost } from 'src/utils';

import { JustifyService } from './justify.service';

@ApiTags('Justify routes')
@Controller('justify')
export class JustifyController {
  constructor(private readonly justifyService: JustifyService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @ApiBearerAuth()
  @Header('content-type', 'text/plain')
  @ApiConsumes('text/plain', 'multipart/form-data')
  async getTextJustified(
    @Request() req: IncomingMessage & { user: User },
    @Body() fg: { user: string }
  ) {
    const text = await readPost(req);
    const currentTextTotalWordCount = text.split(' ').length;

    const willUserExceedFreeLimit =
      await this.justifyService.willUserExceedFreeLimit(
        req.user.email,
        currentTextTotalWordCount
      );

    if (willUserExceedFreeLimit) {
      throw new HttpException('Payment Required', 402);
    }

    return this.justifyService.justifyText(text);
  }
}
