import { JustifyController } from './justify.controller';
import { JustifyService } from './justify.service';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [JustifyController],
  providers: [JustifyService, UsersService, PrismaService],
})
export class JustifyModule {}
