// export const Env = {
//     PORT: 'PORT',
//     DB_HOST: 'DB_HOST',
//     DB_PORT: 'DB_PORT',
//     DB_DATABASE: 'DB_DATABASE'
// } as const;
//
// export type EnvKey = keyof typeof Env;

export const User = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

export type UserKey = keyof typeof User;
