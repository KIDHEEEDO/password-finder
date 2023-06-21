import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'SRC/user/entity/user.model';
import { MongoRepository } from 'typeorm';

export class UserRepository {
    constructor(@InjectRepository(UserModel) private readonly userRepository: MongoRepository<UserModel>) {}

    public create = async (newUser: Partial<UserModel>): Promise<UserModel> => {
        const user = this.userRepository.create(newUser);
        const createdUser = await this.userRepository.save(user);
        createdUser.creator = createdUser.userId.toString();
        createdUser.updater = createdUser.userId.toString();
        return await this.userRepository.save(createdUser);
    };

    public findOneByFilter = async (filter: Partial<UserModel>): Promise<UserModel | undefined> => {
        return await this.userRepository.findOne({ where: filter });
    };
}
