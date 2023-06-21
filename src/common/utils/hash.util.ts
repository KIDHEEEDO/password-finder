import { hash, compare } from 'bcrypt';

export class HashUtil {
    public static hashPassword = async (password: string): Promise<string> => {
        return await hash(password, 10);
    };

    public static comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
        return await compare(password, hashedPassword);
    };
}
