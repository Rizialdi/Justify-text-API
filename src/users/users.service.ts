import { Prisma, User } from '@prisma/client';

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.UserCreateInput
  ): Promise<{ token: string; user: User }> {
    const user = await this.prisma.user.create({
      data,
    });

    const token = '';

    return {
      token,
      user,
    };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
