import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    get() {
        return { name: 'Sara', email: 'sara@gmail.com' };
    }

    create(createUserDto: CreateUserDto) {
        return createUserDto;
    }

    update(updateUserDto: UpdateUserDto, userId: number) {
        return { body: updateUserDto, userId };
    }

    show(userId: number) {
        return { userId };
    }

    delete(userId: number) {
        return { userId };
    }
}
