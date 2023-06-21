import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from 'SRC/user/repository/user.repository';
import { UserModel } from 'SRC/user/entity/user.model';
import { IntegrateException } from 'EXCEPTION/integrateException';
import { ErrCode } from 'EXCEPTION/errCode';
import { ErrMsg } from 'EXCEPTION/errMsg';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { EnvService } from 'SRC/env/env.service';
import { Env } from 'SRC/env/dataTypes/types/env.type';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository, private readonly envService: EnvService) {}

    public register = async (email: string, password: string): Promise<Partial<UserModel>> => {
        const emailUser = await this.userRepository.findOneByFilter({ email });
        if (emailUser) throw new IntegrateException(ErrCode.EMAIL_CONFLICT, ErrMsg.EMAIL_CONFLICT, HttpStatus.CONFLICT);

        const hashedPassword = await hash(password, 10);
        const user = await this.userRepository.create({ email, password: hashedPassword });
        return user;
    };

    public login = async (email: string, password: string) => {
        const emailUser = await this.userRepository.findOneByFilter({ email });
        if (!emailUser) throw new Error('꺼져');

        const isMatched = await compare(password, emailUser.password);
        if (!isMatched) throw new Error('꺼져');

        const userId = emailUser.userId;
        const token = sign({ userId }, this.envService.get<string>(Env.JWT_KEY));
        return { token };
    };
}
