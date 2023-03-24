import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    @Get()
    getUser() {
        return { name: 'John', email: 'john@gmail.com' };
    }
}
