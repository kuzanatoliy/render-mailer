import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { messageRouter } from './routes';
import { CORS_ORIGIN } from './config';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(bodyParser.urlencoded());

app.use(messageRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
