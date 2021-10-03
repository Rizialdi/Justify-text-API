import { User } from '.prisma/client';
import {
  Controller,
  Header,
  HttpException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { IncomingMessage } from 'http';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PlainBody } from './decorators/PlainBody.decorator';
import { PlainBodyDto } from './dto/plainbody.dto';
import { PaymentRequiredResponseEntity } from './entities/paymentRequired.entity';
import { UnauthorizedResponseEntity } from './entities/unauthorized.entity';

import { JustifyService } from './justify.service';

@ApiTags('Justify routes')
@Controller('justify')
export class JustifyController {
  constructor(private readonly justifyService: JustifyService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  @ApiBearerAuth()
  @Header('content-type', 'text/plain')
  @ApiOkResponse({
    type: String,
    description: 'Returns the justified text with the right spaces.',
  })
  @ApiUnauthorizedResponse({
    type: UnauthorizedResponseEntity,
    description:
      'Right credentials where not given during the request.\n Set your token at the top of the file.',
  })
  @ApiConsumes('text/plain')
  @ApiResponse({
    status: 402,
    type: PaymentRequiredResponseEntity,
    description: 'Payment Required.',
  })
  async getTextJustified(
    @Request() req: IncomingMessage & { user: User },
    @PlainBody() text: PlainBodyDto
  ) {
    const currentTextTotalWordCount = text.split(' ').length;

    const willUserExceedFreeLimit =
      await this.justifyService.willUserExceedFreeLimit(
        req.user.email,
        currentTextTotalWordCount
      );

    if (willUserExceedFreeLimit) {
      throw new HttpException('Payment Required', 402);
    }

    return this.justifyService.justifyText(text as string);
  }
}
