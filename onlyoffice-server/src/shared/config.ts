import { join } from 'path';

export default () => ({
  isTest: process.env.NODE_ENV === 'test',
  isOnline: process.env.NODE_ENV === 'online',
  port: process.env.PORT,
  apiPrefix: process.env.API_PREFIX,
  domain: process.env.DOMAIN,
  staticPath: join(process.cwd(), '/static'),
  onlyoffice: {
    secret: process.env.ONLYOFFICE_SECRET,
    useJwtEncrypt: process.env.ONLYOFFICE_USE_JWT_ENCRYPT,
    domain: process.env.ONLYOFFICE_DOMAIN,
    commandUrl: process.env.ONLYOFFICE_COMMAND_URL,
    callback: process.env.ONLYOFFICE_CALLBACK,
  },
});
