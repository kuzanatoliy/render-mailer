import { Request, Response } from 'express';

import { sendMail, validateMail } from './nodemailer';
import { nodemailerService } from '../services';
import mailData from '../mock-data/mail.json';

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

  it('should call next function if props are correct', async () => {
    const requestData = {
      ...mockRequest,
      body: { ...mailData.correct },
    } as unknown as Request;
    const nextSpy = jest.fn();
    await validateMail(requestData, mockResponse, nextSpy);
    expect(nextSpy).toHaveBeenCalled();
    expect(mockResponse.status).not.toHaveBeenCalled();
    expect(mockResponse.send).not.toHaveBeenCalled();
  });

  it('should not call next function if props are correct', async () => {
    const requestData = {
      ...mockRequest,
      body: { ...mailData.incorrect },
    } as unknown as Request;
    const nextSpy = jest.fn();
    await validateMail(requestData, mockResponse, nextSpy);
    expect(nextSpy).not.toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalled();
    expect(mockResponse.send).toHaveBeenCalled();
  });
});
