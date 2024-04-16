import express, { Request, Response } from 'express';
import { createTransport } from 'nodemailer';

import {
  MAILER_HOST,
  MAILER_PORT,
  MAILER_USER,
  MAILER_PASS,
  MAILER_TO,
} from './config';

const transporter = createTransport({
  host: MAILER_HOST,
  port: MAILER_PORT,
  secure: false,
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASS,
  },
});

const app = express();
const port = process.env.PORT || 3001;

app.get('/', async (req: Request, res: Response) => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
    to: MAILER_TO,
    subject: 'Hello ✔',
    text: 'Hello world?',
  });
  res.type('html').send(info.messageId);
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
