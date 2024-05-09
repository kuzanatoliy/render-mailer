import { Request, Response } from 'express';

import { sendMail } from './nodemailer';
import { nodemailerService } from '../services';

jest.mock('../services', () => ({
  nodemailerService: {
    sendMail: jest.fn().mockImplementation(() =>
      Promise.resolve({
        info: {
          messageId: 111,
        },
      })
    ),
  },
}));

const mockResponse = {
  type: jest.fn().mockImplementation(() => mockResponse),
  send: jest.fn().mockImplementation(() => mockResponse),
  status: jest.fn().mockImplementation(() => mockResponse),
} as unknown as Response;

const mockRequest = {} as unknown as Request;

describe('nodemailerController', () => {
  it('should send email', async () => {
    await sendMail(mockRequest, mockResponse);
    expect(nodemailerService.sendMail).toHaveBeenCalled();
    expect(mockResponse.type).toHaveBeenCalled();
    expect(mockResponse.send).toHaveBeenCalled();
  });
});
