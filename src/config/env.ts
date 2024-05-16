export const MAILER_SERVICE = process.env.MAILER_SERVICE;
export const MAILER_HOST = process.env.MAILER_HOST;
export const MAILER_PORT = process.env.MAILER_PORT
  ? Number(process.env.MAILER_PORT)
  : undefined;
export const MAILER_USER = process.env.MAILER_USER;
export const MAILER_PASS = process.env.MAILER_PASS;
export const MAILER_TO = process.env.MAILER_TO;
export const MAILER_FROM = process.env.MAILER_FROM;

export const CORS_ORIGIN = process.env.CORS_ORIGIN;
