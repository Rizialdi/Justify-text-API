import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.UserCreateInput): Promise<{
        token: string;
        user: User;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<User[]>;
    findOne(email: string): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
