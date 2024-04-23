import { createTransport } from 'nodemailer';

import {
  MAILER_SERVICE,
  MAILER_HOST,
  MAILER_PORT,
  MAILER_USER,
  MAILER_PASS,
  MAILER_TO,
  MAILER_FROM,
} from '../config';

const transporter = createTransport({
  service: MAILER_SERVICE,
  host: MAILER_HOST,
  port: MAILER_PORT,
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASS,
  },
});

export const sendMail = async () =>
  transporter.sendMail({
    from: MAILER_FROM,
    to: MAILER_TO,
    subject: 'Test email',
    text: 'Hello world?',
  });
