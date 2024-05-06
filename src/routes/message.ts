import { Router } from 'express';

import { nodemailerController } from '../controllers';

export const messageRouter = Router();

messageRouter.post('/message', nodemailerController.sendMail);
