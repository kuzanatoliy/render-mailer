# Render mailer

The repo contains code for middle email sending service and should be integrated with [render platform](https://render.com)

### Scripts

| Script         | Description                               |
| -------------- | ----------------------------------------- |
| build          | Build application                         |
| start          | Run application                           |
| start:dev      | Run application in development mode       |
| start:build    | Run builded application                   |
| start:prod     | Run application for production            |
| commitlint     | Run validation for commin format          |
| prettier:check | Run prettier quality gates                |
| prettier:write | Run prettier quality gates and fix errors |
| lint           | Run eslint quality gates                  |
| test           | Run the application's unit tests          |

### Env variables

| Variable | Description | Example |
| --- | --- | --- |
| MAILER_SERVICE | Set up service that used as provider | `yandex` |
| MAILER_HOST | SMTP host name | `example.mail.com` |
| MAILER_PORT | SMTP port | `587` |
| MAILER_USER | User name | `kuzanatoliorg` |
| MAILER_PASS | Password | `kuzanatoliorg_password` |
| MAILER_TO | Target email address | `kuzanatoliorg_example@mail.com` |
| MAILER_FROM | Email address that used as sender | `kuzanatoliort_example@mailspons.com` |
| CORS_ORIGIN | CORS origin configuration | `https://example.com` |

[Example](.env.example)

### Requirements

NodeJS >= 20.x ([How to install](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs))
