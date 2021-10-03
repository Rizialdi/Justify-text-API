import { generateHashFromPassword, removeSensibleInfos } from 'src/utils';

import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService
  ) {}

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    const { email, name, password } = data;

    const user = await this.prisma.user.create({
      data: {
        email,
        name: name ? name : null,
        password,
        wordCounter: { create: { wordCount: 0 } },
      },
    });

    return removeSensibleInfos(user);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }

  async findMe(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return removeSensibleInfos(user);
  }

  async userCredits(userEmail: string) {
    const data = await this.prisma.user.findUnique({
      where: { email: userEmail },
      include: { wordCounter: true },
    });

    const {
      email,
      name,
      wordCounter: { lastestQueryDate, wordCount },
    } = data;

    return {
      email,
      name,
      'lastest query date': new Date(lastestQueryDate),
      'processed words today': wordCount,
      'remaining words today': 80000 - wordCount,
    };
  }

  updateName = async (email: string, name: string) => {
    const user = await this.prisma.user.update({
      data: { name },
      where: { email },
    });

    return removeSensibleInfos(user);
  };

  updatePassword = async (email: string, password: string) => {
    const hashedPassword = await generateHashFromPassword(password, 10);

    const user = await this.prisma.user.update({
      data: { password: hashedPassword },
      where: { email },
    });

    return removeSensibleInfos(user);
  };

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
