import { sendMail } from './nodemailer';
import { createTransport } from 'nodemailer';

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
  const mockEmailProps = {
    subject: 'Test subject',
    message: 'Test email message',
    name: 'Test User',
    email: 'test@test.com',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send email', () => {
    sendMail(mockEmailProps);
    sendMail(mockEmailProps);
    expect(sendMailSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: mockEmailProps.subject,
        text: mockEmailProps.message,
        cc: `${mockEmailProps.name} <${mockEmailProps.email}>`,
      })
    );
    expect(sendMailSpy).toHaveBeenCalledTimes(2);
    expect(createTransport).toHaveBeenCalledTimes(1);
  });
});
