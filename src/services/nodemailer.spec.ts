import { sendMail } from './nodemailer';
import nodemailer from 'nodemailer';

jest.mock('nodemailer', () => {
  const sendMailSpy = jest.fn();

  return {
    createTransport: jest.fn().mockImplementation(() => ({
      sendMail: sendMailSpy,
    })),
    sendMailSpy,
  };
});

const mockEmailProps = {
  subject: 'Test subject',
  message: 'Test email message',
  name: 'Test User',
  email: 'test@test.com',
};

describe('nodemailerService', () => {
  it('should send email', () => {
    sendMail(mockEmailProps);
    expect(
      (nodemailer as unknown as { sendMailSpy: jest.Mock }).sendMailSpy
    ).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: mockEmailProps.subject,
        text: mockEmailProps.message,
        cc: `${mockEmailProps.name} <${mockEmailProps.email}>`,
      })
    );
  });
});
