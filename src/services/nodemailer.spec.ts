import { createTransport } from 'nodemailer';

import { sendMail } from './nodemailer';
import mailData from '../mock-data/mail.json';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(),
}));

const sendMailSpy = jest.fn();

jest.mocked(createTransport).mockImplementation(
  () =>
    ({
      sendMail: sendMailSpy,
    }) as unknown as ReturnType<typeof createTransport>
);

describe('nodemailerService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send email', () => {
    sendMail(mailData.correct);
    sendMail(mailData.correct);
    expect(sendMailSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: mailData.correct.subject,
        text: mailData.correct.message,
        cc: `${mailData.correct.name} <${mailData.correct.email}>`,
      })
    );
    expect(sendMailSpy).toHaveBeenCalledTimes(2);
    expect(createTransport).toHaveBeenCalledTimes(1);
  });
});
