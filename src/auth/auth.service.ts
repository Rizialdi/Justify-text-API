import { genSalt, hash } from 'bcrypt';

import { ConfigService } from '@nestjs/config';
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

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.name, sub: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(data: { email: string; password: string }): Promise<{
    user: { id: string; email: string; name?: string };
    access_token: string;
  }> {
    const { email, password: userPassword } = data;

    const saltOrRounds = parseInt(
      this.configService.get<string>('APP_SECRET_CODE')
    );

    console.log(saltOrRounds);

    const hashedPassword = await hash(userPassword, saltOrRounds);

    const user = await this.prisma.user.create({
      data: {
        email,
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
