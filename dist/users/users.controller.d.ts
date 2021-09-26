import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: Prisma.UserCreateInput): Promise<{
        token: string;
        user: import(".prisma/client").User;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
    findOne(email: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
