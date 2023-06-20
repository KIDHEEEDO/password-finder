import { BaseEntity } from 'SRC/database/entity/base.entity';
import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity('user_model')
export class UserModel extends BaseEntity {
    @ObjectIdColumn()
    userId: ObjectId;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Column({ nullable: false, comment: '이메일' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @Column({ nullable: false, comment: '비밀번호' })
    password: string;
}
