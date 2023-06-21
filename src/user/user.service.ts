import { HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from 'SRC/user/repository/user.repository';
import { UserModel } from 'SRC/user/entity/user.model';
import { IntegrateException } from 'EXCEPTION/integrateException';
import { ErrCode } from 'EXCEPTION/errCode';
import { ErrMsg } from 'EXCEPTION/errMsg';
import { EnvService } from 'SRC/env/env.service';
import { HashUtil } from 'COMMON/utils/hash.util';
import { JwtUtil } from 'COMMON/utils/jwt.util';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository, private readonly envService: EnvService) {}

    public register = async (email: string, password: string): Promise<Partial<UserModel>> => {
        const emailUser = await this.userRepository.findOneByFilter({ email });
        if (emailUser) throw new IntegrateException(ErrCode.EMAIL_CONFLICT, ErrMsg.EMAIL_CONFLICT, HttpStatus.CONFLICT);

        const hashedPassword = await HashUtil.hashPassword(password);
        const user = await this.userRepository.create({ email, password: hashedPassword });
        return user;
    };

    public login = async (email: string, password: string) => {
        const emailUser = await this.validateUser({ email });

        const isMatched = await HashUtil.comparePassword(password, emailUser.password);
        if (!isMatched) throw new IntegrateException(ErrCode.USER_NOT_FOUND, ErrMsg.USER_NOT_FOUND, HttpStatus.NOT_FOUND);

        const userId = emailUser.userId;
        const token = JwtUtil.issueToken({ userId });
        return { token };
    };

    private validateUser = async (filter: Partial<UserModel>) => {
        const user = await this.userRepository.findOneByFilter(filter);
        if (!user) throw new IntegrateException(ErrCode.USER_NOT_FOUND, ErrMsg.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
        return user;
    };
}
