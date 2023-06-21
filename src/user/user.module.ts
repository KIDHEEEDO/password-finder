import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from 'SRC/user/repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from 'SRC/user/entity/user.model';

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
})
export class UserModule {}
