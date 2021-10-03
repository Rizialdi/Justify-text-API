// original https://stackoverflow.com/a/61416426
import * as rawBody from 'raw-body';

import {
  BadRequestException,
  ExecutionContext,
  createParamDecorator,
} from '@nestjs/common';

import { ApiBody } from '@nestjs/swagger';

export const PlainBody = createParamDecorator(
  async (_, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest<import('express').Request>();
    if (!req.readable) {
      throw new BadRequestException(
        'Invalid body. You must your data under plain text '
      );
    }

    const body = (await rawBody(req)).toString('utf8').trim();
    return body;
  },
  [
    (target: any, key: string) => {
      ApiBody({ type: String, required: true })(
        target,
        key,
        Object.getOwnPropertyDescriptor(target, key)
      );
    },
  ]
);
