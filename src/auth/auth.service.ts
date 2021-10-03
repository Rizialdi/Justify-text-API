import { compare, hash } from 'bcrypt';

import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailInUseException } from './exceptions/emailInUse.exception';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { User } from '.prisma/client';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && (await compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getUserToken(user: User) {
    const payload = { username: user.name, sub: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(data: CreateUserDto): Promise<{
    user: { id: string; email: string; name?: string };
    access_token: string;
  }> {
    const { email, name, password: userPassword } = data;

    const saltOrRounds = parseInt(
      this.configService.get<string>('HASH_PASSWORD')
    );

    const hashedPassword = await hash(userPassword, saltOrRounds);

    const isUserInDb = !!(await this.usersService.findOne(email));

    if (isUserInDb) throw new EmailInUseException();

    const user = await this.prisma.user.create({
      data: {
        email,
        name: name ? name : null,
        password: hashedPassword,
        wordCounter: { create: { wordCount: 0 } },
      },
    });

    const payload = { username: user.name, sub: user.email };

    const access_token = this.jwtService.sign(payload);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userRest } = user;

    return {
      user: userRest,
      access_token,
    };
  }
}
