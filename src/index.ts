import express from 'express';
import { messageRouter } from './routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(messageRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
