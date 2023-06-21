export const Env = {
    PORT: 'PORT',
    DB_HOST: 'DB_HOST',
    DB_PORT: 'DB_PORT',
    DB_DATABASE: 'DB_DATABASE',
    JWT_KEY: 'JWT_KEY',
} as const;

export type EnvKey = keyof typeof Env;
