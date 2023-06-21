import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from 'SRC/user/user.service';
import { RegisterReqDto } from 'SRC/user/dataTypes/dtos/register.req.dto';
import { LoginReqDto } from 'SRC/user/dataTypes/dtos/login.req.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    public async register(@Body() body: RegisterReqDto) {
        const { email, password } = body;
        return await this.userService.register(email, password);
    }

    @Post('/log-in')
    @HttpCode(HttpStatus.OK)
    public async login(@Body() body: LoginReqDto) {
        const { email, password } = body;
        return await this.userService.login(email, password);
    }
}
