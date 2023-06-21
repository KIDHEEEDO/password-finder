import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from 'SRC/user/repository/user.repository';
import { UserModel } from 'SRC/user/entity/user.model';
import { IntegrateException } from 'EXCEPTION/integrateException';
import { ErrCode } from 'EXCEPTION/errCode';
import { ErrMsg } from 'EXCEPTION/errMsg';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    public register = async (email: string, password: string): Promise<Partial<UserModel>> => {
        const emailUser = await this.userRepository.findOneByFilter({ email });
        if (emailUser) throw new IntegrateException(ErrCode.EMAIL_CONFLICT, ErrMsg.EMAIL_CONFLICT, HttpStatus.CONFLICT);

        const hashedPassword = await hash(password, 10);
        const user = await this.userRepository.create({ email, password: hashedPassword });
        return user;
    };
}
