import { Request, Response } from 'express';
import { nodemailerService } from '../services';

export const sendMail = async (req: Request, res: Response) => {
  const info = await nodemailerService.sendMail(req.body);
  console.log(req.body);
  res.type('html').send(info.messageId);
};
