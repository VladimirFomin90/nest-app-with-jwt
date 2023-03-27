import { UserService } from './../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {}

    @Post('/login')
    async login(@Body() loginDto: any) {
        const authUser = await this.userService.findByEmail(loginDto.email);
        if (authUser) {
            if (authUser.password === loginDto.password) {
                return authUser;
            }

            return 'password does not match';
        }

        return 'not authorized';
    }
}
