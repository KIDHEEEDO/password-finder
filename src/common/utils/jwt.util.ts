import { EnvService } from 'SRC/env/env.service';
import { Env } from 'SRC/env/dataTypes/types/env.type';
import { sign } from 'jsonwebtoken';

export class JwtUtil {
    public static issueToken = <T>(data: T) => {
        return sign(data, new EnvService().get<string>(Env.JWT_KEY));
    };
}
