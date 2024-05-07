import { NextFunction, Request, Response } from 'express';
import { checkSchema } from 'express-validator';
import { nodemailerService } from '../services';

export const validateMail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await checkSchema(
    {
      subject: { optional: false, notEmpty: true },
      message: { optional: false, notEmpty: true },
      name: { optional: false, notEmpty: true },
      email: { optional: false, notEmpty: true, isEmail: true },
    },
    ['body']
  ).run(req);

  if (result.some((item) => !item.isEmpty())) {
    return res.status(404).send('Invalid value');
  }

  return next();
};

export const sendMail = async (req: Request, res: Response) => {
  const info = await nodemailerService.sendMail(req.body);
  res.type('html').send(info.messageId);
};
