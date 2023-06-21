import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from 'SRC/user/user.service';
import { RegisterReqDto } from 'SRC/user/dataTypes/dtos/register.req.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    public async register(@Body() body: RegisterReqDto) {
        const { email, password } = body;
        return await this.userService.register(email, password);
    }
}
