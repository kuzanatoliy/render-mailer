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
import { IMailProps, TTransporter } from '../types';

let transporter: TTransporter;

const getTransport = () => {
  if (!transporter) {
    transporter = createTransport({
      service: MAILER_SERVICE,
      host: MAILER_HOST,
      port: MAILER_PORT,
      auth: {
        user: MAILER_USER,
        pass: MAILER_PASS,
      },
    });
  }

  return transporter;
};

export const sendMail = async (props: IMailProps) =>
  getTransport().sendMail({
    from: MAILER_FROM,
    to: MAILER_TO,
    cc: `${props.name} <${props.email}>`,
    subject: props.subject,
    text: props.message,
  });
