import { PickType } from '@nestjs/swagger';
import { UserModel } from 'SRC/user/entity/user.model';
import { User } from 'SRC/user/dataTypes/types/user.type';

export class RegisterReqDto extends PickType(UserModel, [User.EMAIL, User.PASSWORD] as (keyof UserModel)[]) {}
